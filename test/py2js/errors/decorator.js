/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/errors/decorator.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/errors/decorator.py', function (_) {
    _.__doc__ = "";
    _.wrapper = Class('wrapper', [], (function(){
        var __1 = {};
        __1.__init__ = $def(function $___init__(self, fn) { // 4
            self.fn = fn;
        });
        __1.__init__.__module__ = _.__name__;
        __1.__init__.__name__ = $b.str("__init__");
        __1.__call__ = $def({}, true, function $___call__(self, args) { // 7
            return $b.add($b.add($b.str('('), $b.apply(self.fn, args)), $b.str(')'));
        });
        __1.__call__.__module__ = _.__name__;
        __1.__call__.__name__ = $b.str("__call__");
        return __1;
    }()));
    _.wrapper.__module__ = _.__name__;
    _.mydecorator = $def(function $_mydecorator(x) { // 10
        $b.print($b.add($b.str('decorating '), $b.str(x)));//, true
        return _.wrapper(x);
    });
    _.mydecorator.__module__ = _.__name__;
    _.mydecorator.__name__ = $b.str("mydecorator");
    _.myclass = Class('myclass', [], (function(){
        var __1 = {};
        __1.__init__ = $def(function $___init__(self, val) { // 16
            self.val = val;
        });
        __1.__init__.__module__ = _.__name__;
        __1.__init__.__name__ = $b.str("__init__");
        __1.describe = _.mydecorator($def(function $_describe(self) { // 19
            return self.val;
        }));
        __1.describe.__module__ = _.__name__;
        __1.describe.__name__ = $b.str("describe");
        return __1;
    }()));
    _.myclass.__module__ = _.__name__;
    _.describe = _.mydecorator($def(function $_describe() { // 23
        return $b.str('world');
    }));
    _.describe.__module__ = _.__name__;
    _.describe.__name__ = $b.str("describe");
    _.m = _.myclass($b.str('hello'));
    $b.print(_.m.describe(_.m));//, true
    $b.print(_.describe());//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/errors/decorator.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

