/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/functions/sort23.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/functions/sort23.py', function (_) {
    _.__doc__ = "";
    _.getkey = $def(function $_getkey(x) { // 2
        if ($b.bool($b.do_ops(x, '<', 5)) === true) {
            return $b.add(x, 10);
        } else return x;
    });
    _.getkey.__module__ = _.__name__;
    _.getkey.__name__ = $b.str("getkey");
    _.revcmp = $def(function $_revcmp(a, b) { // 8
        if ($b.bool($b.do_ops(b, '<', a)) === true) {
            return -1;
        }
        if ($b.bool($b.do_ops(b, '==', a)) === true) {
            return 0;
        }
        return 1;
    });
    _.revcmp.__module__ = _.__name__;
    _.revcmp.__name__ = $b.str("revcmp");
    _.l = $b.list([4, 7, 2, 3, 8, 1, 3]);
    _.l.sort(_.revcmp, _.getkey);
    $b.print(_.l.__getitem__(0));//, true
    $b.print(_.l.__getitem__(1));//, true
    $b.print(_.l.__getitem__(2));//, true
    $b.print($b.str('---'));//, true
    _.l.sort(_.revcmp, _.getkey, $b.True);
    $b.print(_.l.__getitem__(0));//, true
    $b.print(_.l.__getitem__(1));//, true
    $b.print(_.l.__getitem__(2));//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/functions/sort23.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);

