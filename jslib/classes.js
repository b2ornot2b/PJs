/**
Copyright 2010 Jared Forsyth <jared@jareforsyth.com>

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

**/

/** python-style classes in javascript!! **/

var to_array = function(a){return Array.prototype.slice.call(a,0);};

function __instancemethod(self, val) {
    var fn = function() {
        return val.apply(this, [self].concat(to_array(arguments)));
    };
    fn.__type__ = 'instancemethod';
    fn.__wraps__ = val;
    if (val.args) {
        fn.args = function(pos, kwd) {
            return val.args([self].concat(pos), kwd);
        };
    }
    for (var k in val) {
        if (!defined(fn[k])) {
            fn[k] = val[k];
        }
    }
    fn.__name__ = val.name;
    fn.name = val.name;
    return fn;
}

function instancemethod(cls, fn) {
    var meta = function() {
        /*
        if (!__builtins__.isinstance(arguments[0], cls))
            throw new Error('TypeError: unbound method '+fn.__name__+'() must be called with '+cls.__name__+' instance as the first argument');
        */
        return fn.apply(null, arguments);
    }
    meta.__name__ = fn.__name__?fn.__name__:fn.name;
    meta.__type__ = instancemethod;
    meta.__wraps__ = fn;
    meta.__str__ = function(){
        return '<unbound method '+cls.__name__+'.'+meta.__name__+'>';
    };
    meta.im_class = cls;
    meta.im_func = fn;
    meta.im_self = null;
    meta.__get__ = function(self, cls) {
        cls = cls||self.__class__;
        /*
        if (!__builtins__.isinstance(self, cls))
            throw new Error('idk what just happened... invalid self while binding instancemethod');
        */
        var m2 = function() {
            return fn.apply(this, [self].concat(to_array(arguments)));
        };
        m2.__name__ = meta.__name__;
        m2.__type__ = instancemethod;
        m2.__wraps__ = fn;
        m2.__str__ = function(){
            return '<bound method '+cls.__name__+'.'+meta.__name__+' of '+self.__str__()+'>';
        };
        m2.im_class = cls;
        m2.im_func = fn;
        m2.im_self = self;
        m2.args = function(pos, kwd) {
            return fn.args([self].concat(pos), kwd);
        };
        return m2;
    };
    return meta;
}

function _set_name(fn, name) {
    fn.__name__ = name;
    while(fn = fn.__wraps__)
        fn.__name__ = name;
}

var type = $m(function type(name, bases, namespace) {
    var cls = function() {
        var self = {};
        self.__init__ = instancemethod(cls, function(){}).__get__(self);
        self.__class__ = cls;
        self.__type__ = 'instance';

        for (var attr in cls) {
            if (['__type__','__class__'].indexOf(attr)!==-1)
              continue;
            var val = cls[attr];
            if (val && val.__type__ == instancemethod && !val.im_self) {
                self[attr] = val.__get__(self, cls);
                _set_name(self[attr], attr);
            } else
                self[attr] = val;
        }
        self.__init__.apply(null, arguments);
        self.toString = self.__str__;
        return self;
    };
    var ts = cls.toString;
    var __setattr__ = $m(function(key, val) {
        if (val && val.__type__ === 'function' ||
                (val && !val.__type__ && typeof(val)==='function')) {
            cls[key] = instancemethod(cls, val);
        } else if (val && val.__type__ === classmethod) {
            cls[key] = val.__get__(cls);
        } else if (val && val.__type__ === staticmethod) {
            cls[key] = val.__get__(cls);
        } else if (val && val.__type__ === instancemethod) {
            cls[key] = instancemethod(cls, val.im_func);
        } else
            cls[key] = val;
    });
    for (var i=0;i<bases.length;i++) {
        for (var key in bases[i]) {
            if (key === 'prototype') continue;
            var val = bases[i][key];
            __setattr__(key, val);
        }
    }
    cls.__type__ = 'type';
    cls.__bases__ = bases;
    cls.__name__ = name;
    for (var key in namespace) {
        __setattr__(key, namespace[key]);
    }
    //if (cls.toString === ts)
    //  cls.toString = cls.__str__;
    return cls;
});

function classmethod(val) {
    var clsm = {};
    clsm.__get__ = function(cls) {
        return instancemethod(cls, val).__get__(cls);
    };
    clsm.__type__ = classmethod;
    clsm.__str__ = function(){return '<classmethod object at 0x10beef01>';};
    return clsm;
}
/*
function __classmethod(cls, val){
    var fn = function() {
        return val.apply(this, [cls].concat(to_array(arguments)));
    };
    if (val.args) {
        fn.args = function(pos, kwd) {
            return val.args([cls].concat(pos), kwd);
        };
    }
    fn.__type__ = 'classmethod';
    fn.__wraps__ = val;
    return fn;
}

// decorators
function classmethod(method){
    method.__cls_classmethod = true;
    return method;
}
*/
function staticmethod(method){
    var obj = {};
    obj.__type__ = staticmethod;
    obj.__get__ = function(){return method;}
    obj.__str__ = function(){return '<staticmethod object at 0x10beef01>';};
    return obj;
}

var Class = type;

