/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/basic/for_step.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/basic/for_step.py', function (_) {
    _.__doc__ = "";
    var __pjs_iter0 = $b.foriter($b.xrange(19, 342, 13));
    while (__pjs_iter0.trynext()) {
        _.x = __pjs_iter0.value;
    
        $b.print(_.x);//, true
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/basic/for_step.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

