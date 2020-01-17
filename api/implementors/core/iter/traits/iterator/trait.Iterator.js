(function() {var implementors = {};
implementors["wasi_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"wasi_common/fs/struct.ReadDir.html\" title=\"struct wasi_common::fs::ReadDir\">ReadDir</a>","synthetic":false,"types":["wasi_common::fs::readdir::ReadDir"]}];
implementors["yanix"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"yanix/dir/struct.DirIter.html\" title=\"struct yanix::dir::DirIter\">DirIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"struct\" href=\"yanix/dir/struct.Dir.html\" title=\"struct yanix::dir::Dir\">Dir</a>&gt;,&nbsp;</span>","synthetic":false,"types":["yanix::dir::DirIter"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()