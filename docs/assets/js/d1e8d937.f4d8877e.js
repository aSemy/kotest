"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),p=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,f=h["".concat(i,".").concat(d)]||h[d]||c[d]||o;return n?s.createElement(f,r(r({ref:t},u),{},{components:n})):s.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=n(87462),a=(n(67294),n(3905));const o={},r="Release 4.1",l={unversionedId:"blog/release_4.1",id:"version-5.6/blog/release_4.1",title:"Release 4.1",description:"The Kotest team is pleased to announce the release of Kotest 4.1.0.",source:"@site/versioned_docs/version-5.6/blog/release_4.1.md",sourceDirName:"blog",slug:"/blog/release_4.1",permalink:"/docs/blog/release_4.1",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/blog/release_4.1.md",tags:[],version:"5.6",frontMatter:{}},i={},p=[{value:"Kotest Plugin",id:"kotest-plugin",level:3},{value:"Kotlintest aliases removed",id:"kotlintest-aliases-removed",level:3},{value:"Highlight diff when comparing data classes",id:"highlight-diff-when-comparing-data-classes",level:3},{value:"Integration with Testcontainers",id:"integration-with-testcontainers",level:3},{value:"&#39;x&#39; variants for Specs",id:"x-variants-for-specs",level:3},{value:"Removing test prefixes from test output",id:"removing-test-prefixes-from-test-output",level:3},{value:"Invocation level timeouts",id:"invocation-level-timeouts",level:3},{value:"Parallel test execution",id:"parallel-test-execution",level:3},{value:"All scopes are now coroutine scopes",id:"all-scopes-are-now-coroutine-scopes",level:3},{value:"Make beforeProject and afterProject as suspend function",id:"make-beforeproject-and-afterproject-as-suspend-function",level:3},{value:"Assert softly with receiver",id:"assert-softly-with-receiver",level:3},{value:"Better shrink information",id:"better-shrink-information",level:3},{value:"Property Test Listeners",id:"property-test-listeners",level:3},{value:"Thanks",id:"thanks",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-41"},"Release 4.1"),(0,a.kt)("p",null,"The Kotest team is pleased to announce the release of Kotest 4.1.0.\nThis minor feature release is packed with goodies including the first public release of the Intellij plugin.\nIn this blog post we'll cover some of the more notable features and changes but for the full list see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/changelog.html"},"changelog"),"."),(0,a.kt)("h3",{id:"kotest-plugin"},"Kotest Plugin"),(0,a.kt)("p",null,"Let's start with the most exciting news. As part of the 4.1.0 release cycle, we've released the first public version\nof the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/14080-kotest"},"Kotest plugin for Intellij"),'. The plugin is available in the Jetbrains plugin repository, so hop on over to\nsettings -> plugins and search for "kotest".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"plugin image",src:n(8115).Z,width:"509",height:"162"})),(0,a.kt)("p",null,"As this is the first release that will be used by the majority of users, bugs will likely be found. If you do encounter\nan issue, please open a ticket ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-intellij-plugin"},"here"),"."),(0,a.kt)("p",null,"The plugin provides gutter run icons for specs, top level tests, and nested tests."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"gutter_icon_picture",src:n(6534).Z,width:"737",height:"438"})),(0,a.kt)("p",null,"The plugin additionally provides a tool window view which displays the structure of your tests.\nThe window describes the currently selected test file, which includes any specs defined in that file and tests\ncontained inside those specs. The tree layout will mirror the structure of your tests for easy navigation."),(0,a.kt)("p",null,"The tool window will include lifecycle callback methods (such as before / after test) if defined,\nas well as included test factories."),(0,a.kt)("p",null,"Clicking on a spec, test, include or callback will navigate directly to that element in the source editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"test_explorer_tests",src:n(27271).Z,width:"746",height:"434"})),(0,a.kt)("p",null,"For full details on the features provided by the plugin, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-intellij-plugin"},"readme"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In order to support this plugin, the behind the scenes code that fooled Intellij into thinking Kotest specs\nwere Junit tests has been removed. This means that unless you have the plugin installed, you won't see the green\nplay icon anymore on the class name."),(0,a.kt)("h3",{id:"kotlintest-aliases-removed"},"Kotlintest aliases removed"),(0,a.kt)("p",null,"With release 4.0 of Kotest, the project was renamed from Kotlintest. To aid migration, we created aliases from the kotlintest\npackages to the kotest packages for common imports."),(0,a.kt)("p",null,"With the release of 4.1 these aliases have been removed."),(0,a.kt)("h3",{id:"highlight-diff-when-comparing-data-classes"},"Highlight diff when comparing data classes"),(0,a.kt)("p",null,"When comparing two data classes for equality, previously you had to look through the fields to see which one(s) didn't match up.\nInstead now, the failure output will highlight the differences for you."),(0,a.kt)("p",null,"For example, given the following data class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Foo(val a: String, val b: Boolean, val c: Double)\n")),(0,a.kt)("p",null,"And then executing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val a = Foo("hello", true, 1.0)\nval b = Foo("world", true, 1.3)\na shouldBe b\n')),(0,a.kt)("p",null,"Will give the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'data class diff for Foo\nExpected :Foo(a=world, b=true, c=1.3)\nActual   :Foo(a=hello, b=true, c=1.0)\n<Click to see difference>\n\norg.opentest4j.AssertionFailedError: data class diff for Foo\n\u251c a: expected:<"world"> but was:<"hello">\n\u2514 c: expected:<1.3> but was:<1.0>\n')),(0,a.kt)("h3",{id:"integration-with-testcontainers"},"Integration with Testcontainers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"Test containers")," is a popular Java library that supports lightweight, throwaway instances of databases,\nmessage queues, elasticsearch and so on. And now Kotest has a module that allows easy integration into the test lifecycle."),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest-extensions-testcontainers")," module to your build and then you can register a test container like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val testStartable = SomeTestContainer()\nlisteners(testStartable.perTest())\n")),(0,a.kt)("p",null,"Notice the .perTest() function which creates a listener that will stop and start the container between tests. If you want a container\nthat only starts and stops once per spec, then use the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val testStartable = SomeTestContainer()\nlisteners(testStartable.perSpec())\n")),(0,a.kt)("h3",{id:"x-variants-for-specs"},"'x' variants for Specs"),(0,a.kt)("p",null,"The popular javascript frameworks and RSpec in Ruby have popularized the ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," layout style for tests.\nKotest has supported this since version 1.0 in the form of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DescribeSpec.")," These other frameworks also provide\nan easy way to disable a test, by replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"xdescribe")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"it")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"xit"),". Kotest also supports this."),(0,a.kt)("p",null,"Starting with 4.1 Kotest now rolled out the same functionality to the other styles. For example, you can disable a given\nblock in ",(0,a.kt)("inlineCode",{parentName:"p"},"BehaviorSpec")," by using ",(0,a.kt)("inlineCode",{parentName:"p"},"xgiven"),", you can describe a context block in ",(0,a.kt)("inlineCode",{parentName:"p"},"FunSpec")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"xcontext")," and so on."),(0,a.kt)("p",null,"A full example in the ",(0,a.kt)("inlineCode",{parentName:"p"},"FunSpec")," style."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyFunSpec : FunSpec({\n  xtest("a disabled test") {\n    // this test will not be invoked\n  }\n  xcontext("this context is disabled") {\n     test("and so this test is by extension") {\n     }\n  }\n})\n')),(0,a.kt)("p",null,"See full details on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework/testing-styles.html"},"styles page"),"."),(0,a.kt)("h3",{id:"removing-test-prefixes-from-test-output"},"Removing test prefixes from test output"),(0,a.kt)("p",null,"Following on from the previous section, when you use certain specs, the test names are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Describe:"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Feature:")," and so on in the output."),(0,a.kt)("p",null,"This adds extra noise to the output and in retrospect should not have been added. Starting with 4.1 you can now disable these\n",(0,a.kt)("em",{parentName:"p"},"test prefixes")," by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"includeTestScopePrefixes")," to false in your ",(0,a.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project config"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In 4.2.0 this setting will be true by default."),(0,a.kt)("h3",{id:"invocation-level-timeouts"},"Invocation level timeouts"),(0,a.kt)("p",null,"Kotest has the option to apply a timeout to your tests through config on the test case."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("some test").config(timeout = 3000.milliseconds) { }\n')),(0,a.kt)("p",null,"This timeout applies to all invocations of that test case. So if you have invocations set greater than 1, then the timeout\nis shared between all invocations. Starting with 4.1 you can now apply a timeout at the invocation level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("some test").config(timeout = 3000.milliseconds,\n                         invocationTimeout = 250.milliseconds,\n                         invocations = 10) { }\n')),(0,a.kt)("h3",{id:"parallel-test-execution"},"Parallel test execution"),(0,a.kt)("p",null,"Kotest has for a long time, had the ability to run specs in parallel. Starting with 4.1 you can run individual test cases in parallel.\nOverride the ",(0,a.kt)("inlineCode",{parentName:"p"},"threads")," val inside your spec class to greater than 1. Note: This feature is experimental and only applies to the single instance isolation mode."),(0,a.kt)("h3",{id:"all-scopes-are-now-coroutine-scopes"},"All scopes are now coroutine scopes"),(0,a.kt)("p",null,"Leaf test cases have always been coroutine scopes since release 3.2 of Ko(tlin)Test. This means you can ",(0,a.kt)("em",{parentName:"p"},"launch")," a coroutine directly in the test\nblock without needing to provide a scope like ",(0,a.kt)("inlineCode",{parentName:"p"},"GlobalScope")," or your own instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'test("some test") {\n  launch {\n    delay(100)\n  }\n}\n')),(0,a.kt)("p",null,"Previously, parent scopes in test styles that allow nesting, were not themselves coroutine scopes. This has been changed in 4.1."),(0,a.kt)("p",null,"Now you can write a test like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'describe("some test") {\n launch {\n    delay(100)\n    it("should do something") {\n       launch {\n          delay(100)\n       }\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"make-beforeproject-and-afterproject-as-suspend-function"},"Make beforeProject and afterProject as suspend function"),(0,a.kt)("p",null,"Another feature that was more an oversight than anything else - the ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeProject")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterProject")," callbacks inside ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectListener")," are now suspendable functions."),(0,a.kt)("h3",{id:"assert-softly-with-receiver"},"Assert softly with receiver"),(0,a.kt)("p",null,"You might already be using ",(0,a.kt)("inlineCode",{parentName:"p"},"assertSoftly")," to allow a test to finish before throwing all the failures at once. Now you can do the same but with a receiver."),(0,a.kt)("p",null,"For example, rather than write"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val person = ...\nassertSoftly {\n  person.name shouldBe "sam"\n  person.age shouldBe 99\n  person.city shouldBe "Chicago"\n}\n')),(0,a.kt)("p",null,"You can now do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val person = ...\nperson.assertSoftly {\n  name shouldBe "sam"\n  age shouldBe 99\n  city shouldBe "Chicago"\n}\n')),(0,a.kt)("h3",{id:"better-shrink-information"},"Better shrink information"),(0,a.kt)("p",null,"If you're using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest/blob/master/doc/property_testing.md"},"property test framework")," you'll notice the improved shrinking output. This now includes both\nthe reason for the original failure (with the original args) and the reason for the shrunk failure (with the\nshrunks args)."),(0,a.kt)("p",null,"For example, given a silly test that checks that any string reversed is the same as the input string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"checkAll<String> { a ->\n  a shouldBe a.reversed()\n}\n")),(0,a.kt)("p",null,"This will be true for the empty string and all single char strings, and then false for most other strings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Property test failed for inputs\n\n0) "!s:?XBy;pq?`$3V70cqoO$zlO&%bUwafP1nF73gMeyQ[RzehtY36"\n\nCaused by org.opentest4j.AssertionFailedError: expected:<"63YthezR[QyeMg37Fn1PfawUb%&Olz$Ooqc07V3$`?qp;yBX?:s!"> but was:<"!s:?XBy;pq?`$3V70cqoO$zlO&%bUwafP1nF73gMeyQ[RzehtY36"> at\n    com.sksamuel.kotest.property.ForAll2Test$1$1$1.invokeSuspend(ForAll2Test.kt:19)\n    com.sksamuel.kotest.property.ForAll2Test$1$1$1.invoke(ForAll2Test.kt)\n    io.kotest.property.internal.ProptestKt$proptest$$inlined$forEach$lambda$1.invokeSuspend(proptest.kt:28)\n    io.kotest.property.internal.ProptestKt$proptest$$inlined$forEach$lambda$1.invoke(proptest.kt)\n\nAttempting to shrink arg "!s:?XBy;pq?`$3V70cqoO$zlO&%bUwafP1nF73gMeyQ[RzehtY36"\nShrink #1: "!s:?XBy;pq?`$3V70cqoO$zlO&" fail\nShrink #2: "!s:?XBy;pq?`$" fail\nShrink #3: "!s:?XBy" fail\nShrink #4: "!s:?" fail\nShrink #5: "!s" fail\nShrink #6: "!" pass\nShrink #7: "as" fail\nShrink #8: "a" pass\nShrink #9: "s" pass\nShrink #10: "aa" pass\nShrink result (after 10 shrinks) => "as"\n\nCaused by org.opentest4j.AssertionFailedError: expected:<"sa"> but was:<"as"> at\n    com.sksamuel.kotest.property.ForAll2Test$1$1$1.invokeSuspend(ForAll2Test.kt:19)\n    com.sksamuel.kotest.property.ForAll2Test$1$1$1.invoke(ForAll2Test.kt)\n    io.kotest.property.internal.ShrinkfnsKt$shrinkfn$1$invokeSuspend$$inlined$with$lambda$1.invokeSuspend(shrinkfns.kt:19)\n    io.kotest.property.internal.ShrinkfnsKt$shrinkfn$1$invokeSuspend$$inlined$with$lambda$1.invoke(shrinkfns.kt)\n')),(0,a.kt)("h3",{id:"property-test-listeners"},"Property Test Listeners"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAll")," property test functions accept a ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTestConfig")," object to configure a property test.\nThis object now contains a listeners field, to which you can attach ",(0,a.kt)("inlineCode",{parentName:"p"},"PropTestListener")," instances. This allows you to\nrun setup / teardown code before and after a property test, like you can for regular tests."),(0,a.kt)("p",null,"For example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val listener = object : PropTestListener {\n  override suspend fun beforeTest() {\n    println("Startup")\n  }\n\n  override suspend fun afterTest() {\n    println("Shutdown")\n  }\n}\n\nval propConfig = PropTestConfig(listeners = listOf(listener))\n\ncheckAll<String, String>(10, propConfig) { a, b ->\n  a.length + b.length shouldBe (a + b).length\n}\n')),(0,a.kt)("h3",{id:"thanks"},"Thanks"),(0,a.kt)("p",null,"Huge thanks to all who contributed to this release."),(0,a.kt)("p",null,"AJ Alt, Albert Attard, Amy, Ashish Kumar Joy, ataronet, Attila Domokos, bbaldino, bright_spark, Caroline Ribeiro, Christian Nedreg\xe5rd, crazyk2, George Wilkins, Harry JinHyeok Kang, James Pittendreigh, Leonardo Colman Lopes, Lyall Jonathan Di Trapani, Martin Nonnenmacher, Maxime Suret, mwfpope, Nikita Klimenko, Nimamoh, Octogonapus, Paul, Robert Macaulay, Robert Stoll, Ron Gebauer, Sebastian Schuberth, Sergei Bulgakov, sharmabhawna, sksamuel, Steffen Rehberg"))}c.isMDXComponent=!0},6534:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/gutter_icons-0041d916c7c27f35d387a77b0bbb55c0.png"},8115:(e,t,n)=>{n.d(t,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf0AAACiCAIAAADEAYNJAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAHnRJREFUeJzt3XlcE3f+P/D3TBICgQQI4fbgBgFRwBNPvOp9tKgttba29dh2f912t932u/3utmuP3Z67rT1269HTar2rVbzqBYIHIIggp6AgVzhDwpFkZn5/gP2qgAhEaJ3X85E/wjifz7wnPh6v+eQznyRMUlISAQCAaDCl2rrWZ9rSq97e3v1bDQAA3GtsfxcAAAB9CrkPACAuyH0AAHFB7gMAiAtyHwBAXJD7AADigtwHABAX5D4AgLgg9wEAxAW5DwAgLsh9AABxuSe5L9RujnFWqdSj1qaZe9Jcd+TFEQNcAx78Io+zeG0AACLXu9w3nfmfoY4qlUqlsndwcvMNn7nqo/hKvtdFmQ21dY3NutqGFqHXfQEAiB6X8/5EJ3v3mG8rBLLQeJ918B4W5m3XcCVx698eWfXVtV4mP6NeuCHrWknh0T+FSi1RHgCA6Enc/N3Tduwr5S2U+7IxL+89eT5l42JnVmhIPHhad9MwXSjbON9ZpXIa/24WR8QXrpumUak0Mz4p4olI0J1ft2yUl6ur3/iV6798cbijSjNtXSFXu3mxp4en59i1aWahdnOMs71mxodHt/5xZugAF1evkUv/eVIrEBFx5cfffXxS8ABnjZt3yPiH/rTlstESZwMAcB+SjZ49MW/X3mLekvP7ZjMnEBErk7LM3bVojF/75N/2ZtcKKo007Z1XNhV18kZBMJ1/+5EX4gwDvBz52py4d9a8faKZqPHwa0+9vTu9YdC0pQvGuNSkXTU5yCx2MgAA9xfOZkLM1Ku79hRyFsl905l35o4fOvypXVU8q56+cKLy7poZz+3eV8wx8pGvxiWcOL39GX+2s+l8gaewV346cfDYt6t9JMRVpqWVcEJzdbVeIEbpP/P3728+npG1Odb9Lq83AABiIwiC9YSYmRW7duVaJPf5usKMS6VGB9/xy9/d/nGM693Fr1B/taiGJ9Y1cuRgKVkNGR5s1WlD1iUicpCEZAO9BkqJyNTSQozDlIfneEj5kt3PjQuJWvbOz6U9WTsEACAWjHzMQ7N0e3ZZJPflM/9zta6m4krqgU9WjXDsJLwFIiLBoG+6fTKHYRgiIkYqkXRerq3SjiEi9qZ6WY+Y9SfjPlw53lNan7X3nWUL/hrf1KvTAAC4v8lHxsw1/njvP7cll8uIiKuqqDST0JCdVXRjTT5jP3CwA0t8RdqF6xxxxXkFzZ0v2+zgYsIZ9Ebn0U99cCD56MsRMsF8PTnlOtb7AwB0Thb+0Hz2ni+UZFRDw32kRy6XbXlpWfPQumNHTNIbGW41ev4cj683lST9ffa0g+51FzLMRHd/Z1ao+mHZqA/0UROGuhrOX+GIdfT1de38HQMAAJB06IML7/14Xxr23KdvPjhUwxcmHCv0e/mHt6fa3Ah+2+jX1v/lAV8VX11cF/DI0jAZEbHMXd6cZRQBUaMcS+N3fvV1XKFt6Lw/b3hj9l3eUAYAEBVJ4IsnLn0w0YqIJCGvMKXautbt2tKr3t7efVuLINCNmG8+9WLkgi9K5HPX53y/xL5vywAAEJH+/ECsULvl8Ymf6UYM83GS6zIO/ljCsc6zYqJV/VgSAMB9rz9zn5H7RoRKNh7bcareKLFzDZi2es3f/rrIGYvwAQDuof6d5wEAgL6G798HABAX5D4AgLgg9wEAxAW5DwAgLsh9AABxQe4DAIgLch8AQFyQ+wAA4nLL53UzMjL6qw4AAOgbt+R+VFRUf9UBAAB9A/M8AADigtwHABAX5D4AgLgg9wEAxAW5DwAgLsh9AABxQe4DAIiLiHKfYfALjgAAYsp9AAAg5D4AgNgg9wEAxEXa9S4dKSi6lnoxs7xSS0RuLs4RYSG+XoO614Xp9B+D5lZ8UL55obxnNQAAQA/0ZLyfcDb55/jEocGBT8bGPBkbMzQ48Of4xISzyRYv7iZ8yacPTPuoiO+LVgAA97Nu535B0bXMnPzlSxYF+fnYKhS2CkWQn8/yJYsyc/ILiq7dixKJiITq40dSTH3TCgDgPlJcWlZXr7t5S7dzP/Vi5qSoUdbyWyZnrOXySVGjUi9m9qwsrui7xYM8F2zMNxMJdec+eSLKy8FG4eQ/ec2mdL1AQsW2xyKe3lt96nlvCWMV+VYWRyTUJ3/2xNjB9gqlR8Tif57U8kRC5bG3Hgr3VMptHAeETntp78Ufbm3Vs9oAAH7TlHa2mbn5v0R/Xb2u27lfrtUO9HBrv32gh1u5VtuTohqSXl/yQt7SzV8/6Sfly75/ev4bJTP/m5SXc+pf4y+/PPd3e7TkuuSbk/+Isp3w70JOMKa8GiwRKnf+buF7+uXbs4pz9q3kP1u6ZkuZMeHtp/9teHRX1vWi1L3vPzltSPDSW1v1pDYAgN84B5UqJNCvNfrrdQ2Zufk9vK/bIalEQkQ/xyelXWobXA8PDZ46YewdmjD8tS0rH9nk9o+Tb092YIgv3rnhoGbVqb88MERKNOC1957aMWXdtpIFz3re0oq/vuPznwY9m7p6lCdLnk+/tPRf07cern7eaBJYhdpZ42qtmelNRIR5fQCAX6I/J59hKDTQv9vjfTdn5+LS8vbbi0vLnTVORBQ9bvSgAR5ENGiAR/S40Xfqi5Fe2/jkM3tc/9+7K/xkRETmgsv5bMiwIW1XI1nwsGAhNyvPfFs7c15mTmPq2jEuGo1Go3Gf9XmhsapSP/7F9xZefzViyJQ1Hx7I0wvdPTEAgPsXQwzDkCCQIAjdzv2IsJCTieeaW1pu3tjc0nIy8dyo4WFExLLs/BlTfQYPnD9jKsvesX++Lq3cLybqyrrXdpS1js0FoV1eMx18vwIvCPKp7ySltcrILryy93c+cp+HN6TkJ7w3teHbx8Ij1+yrRPQDABBRXb3uUk5eSIB/64RPt3Pf12tQSKDfN9t2Z+dfMTQ2Ghobs/OvfLNtt95gyCu82hrbcrnVotkz5HKrLvpi7Ob99T//Wb829OifXthexhNJ/YL9+cy0rLYBvikrPYsJCPaXELEsSxzXNnEj9QvyE3LzKpwH3ODpbCchIpI6DYt5dfPpH1fR9xsO625tBQAgQnX1uszc/JAAP3uVsnXCpyfr98ePHjF1QlRGVs6m73d8/cPuzOy8mdETR4WHpV3KOpaQ1H7EfmcS35XrXg88/McXtpfx7MAlz86vW//nt4/klZfnHnrzzxt1c1c95MkS6zTAwyr7yE8ZFdqKmiZ24OLVsxs2/P4PX5/JLynOS96/fuOxCuOlPV/8eDa3rE5XlpmcU+/o6W59a6senCkAwG+dTq8PCfBzsFe1/umgUlGptq71kZ6eLvTOqaRz73+24ef4xLva25jwgo9D7O5mQRAEY9YHE+09lm4t5QRel/rFygk+jtZye69xKz47X8e37m648HFMmJudtXrCu5fMgsDXnv98VXSAxkYms3MPm/PaYa0xbd2iYR5KmUSm9Ax/6M2fy7nbWhFRL08QAOA+wJRq61ovAtrSq2FhYb28sMSfTVbZ2Q4LGdLLfu4FhmGE7r4ZAQC471hyHScRTRg9wrIdAgCAZeH7OAEAxAW5DwAgLsh9AABxEVHu46YuAACJKvcBAICQ+wAAYoPcBwAQF+Q+AIC4IPcBAMQFuQ8AIC7IfQAAcbnl+3kSExP7qw4AAOgbt+R+REREf9UBAAB9A/M8AADigtwHABAX5D4AgLgg9wEAxAW5DwAgLsh9AABxQe4DAIjLryn3ueJDH/9jx2WzWI4LANAfpF3v8n+EpuKzB4+cyyurN7IKtYffmFlzI1wk96q0Do7feOH7D/fmc0QMa6VwdPcfMXX66IEKxnIH0J3fvIef+9hoh677NF0/tmmnbvLKBYE2DBGnyz26bXeyzYwXYsMVDBEJjZd3rz/luPipaI9uvcYAAPdYNzJJaMzav/V49ZBZS2a7y5prK4rrVIq+f7vAqkcujh3jzDdXXzlz6OjW/cpnY0IslfxCU1FBKe99V7vWpx9LlkY+5W/DkNBUfHrnzhSjyuamOhhF4ISIhC+PpUc+Gqmy3JUJAKC3upP7tWXlJs8xk4d52TFErp5eN7Y3lyYfjDudXd4k0/iNnjln3GAFIzTknzx46lJxZX2TxMF75KwFk3xs+eJDnx+2XTiNid+XUMiOfGJNtLrs/KHDZ7JLGwQbp6DpsXMdiCRUe/GnTacySg1Sx7Z2t4WmxEblqFazpNbMarzyr8MFpXyIn6SDGshQmLD/8PkCbROrcHQfOu3BaT6lez7YJ1v8/FwfCRHxlafWb7g28g+PRli3dmzI3L1pb04Tl/PR2oOs+5Q1T49XXL2thwC7tmL4qvTUEveIhWqWiExVhVrnmY9H1OzcUHhToawmbJhrQurF6vDxml/TdBoAiFw3cp9xdHWWpuVm1wwb4ST7ZatguLx/ayI3cfGzsSp9ZtzW7T/Zr1k81M7aztV/YuB0DwcqP739hwNJ/s9McyPia9L2HXEeOi12ktpeY8jYveWEYdjcZXOdmYYqo6Mdoycy5ibnT1nw+HNO3LWT23btS/D5/QODOplJYliWJYZhOq7hQfuEvWeMI2OfHe7A15cVN6q7fFNgG7LoCV3d59khzzwx2oEh4q4d7KwHQVdQUOUS5Nt6GbAaOHHRQOKrT9/2u+2M0tfP+Wj+Ff04DUb8APCr0Y2BKKMImTk/xHDsi8++2Z+Uo20WiIiEhqzkXPuR0yI9lTZK9/CoUHnBpYJmgWRuQ4b7uTsobBy8Qv0cGqqqTUREQrNpwOSF44MGergoG7NSChQjZk0J9nR29vAZ4uXIEpFA6rBJowY72tppAkcNdTZUVDQKHRYjmHSFp88XKQKCPNmOazBzvMDIbBQKWwd3v6G+6u4PublOe+AqyrQ27m5dpTnr4O4mryyr4Lp9aACAe6Zb9xxZ+6BZT3mNyE87fyZuw+mksYsfnjSgRltlKru+4b0EIiISzC2cq6FJ4FryEo4lZpXUtvAM36LnBwmCQEQkcfcaKCciIr62qpZxHq25bTDPqjWOrfnKyGQy4rjbM5OvOr3pn0kMbzZL3SLmPDrD35rhyjuowTgoanrQD/v/+2nW0FFRUZF+aqvuDrklgzvrQWjU6cxKv64H8YzSXmkq0rV083UGALiHup1HrLVzwJjZ/sODD23cfPBcyJMDBZL6TH96bsCNnhiptU110pc70jVzY1eFaqyp8uQXG0rb/o2RSm8O+nbByTCs5M4Dc9Yx4qHYMZqGi3u2ZspU9lZEREIHNdhKrdTzV/mOzk4+Hb/7PynBMSvm+Nzak8DzXZyqY+htPQS03mwQzCYzyWSyrnNfJpOR2WTqaj8AgL7TwxuOjLXHIFdWr2tg1Bq1UF2tV6huUCqszGXFWrugESEaa5aI1zd0NFfD2jva85XlVV1kb3sSG5Wj2slr3AMjmNSDiWVmIrajGlgiItbGNXjCg08+HEkZqQUtDCuRcBzXVoy5rrbh9roYhiGBv3nrrT3c2E0qlZDZbO54CuomgtlsJom0D5e6AgB0pRu5z5WmnTyfWXCtTFtVXpR2JCFf5uXjJlGFRPq3pB44mF5So9PVlOalXig0SJUq68aKch1HfGNx4ulsQwe9MY7B4V76lEMncipq66pKcnJKm7qM0ZvJPMdPD2k6E3dOyzEd1cBVZqfkXK/WN7fotaXVzdZKpZR1dnM2F2XmNfAkNJeeP5vbfPuNWBuVUlJ1JbfS0GhoMvHte7h5v4Z6Xde531DfIFWqbLpzYgAA91Z31vOwxsr0U+cq65s4iUI9YMj02KlDFAxDofNjW44eid/y+d5mVuE8OHJGkMRr/OzwPYc3fHhSqnAfPm3q0KrsDrpzCF+4pDHu8IEvE/W8jevwOY/62nancsbaLzra6z8HD10Ijh3RvgYSdPnHDxzW6s1SOxff0Qsne0kZZvgDM67vjfv0vf1ypVvIuHEB5UW39in3Hx/tvSd+079PukWveMy3XQ839pO4uGsac8obBK87fsBLqC8rb9aE9OVH2wAAusKUautan2lLrwYEBPRvNb8ZfPnx/355fdTvH41Udh78QkPyd5+kDHpq5SQXrN8HgF8NBFKPsK7Dwt2vp2fU3OH2BF9zMb3MI3yYM15jAPg1QSb1DKOOmBppTD6df/s9ghuEprz4FFPk1PC7+KofAIA+hHkeAABxwXgfAEBckPsAAOKC3AcAEBfkPgCAuCD3AQDE5ZbP6/KsdX/VAQAAfQPjfQAAcUHuAwCIC3IfAEBckPsAAOKC3AcAEBfkPgCAuCD3AQDEBbkPACAuyH0AAHFB7gMAiAtyHwBAXJD7AADigtwHABAX5D4AgLhIu97l3rO1Yjr7J4NR6MtKAADue/0/3u9l6As1Xz2oYmxtQ15PNVu0LgCA+1M/5/4dQ5+/V0fVp2z5xxtfJlb38K1EL5sDAPSr/sz9O4S+3sgRdfqvvSNU7Hr9hb+/8VViVY8uLL1sDgDQz/ot9+8Y+jzTs8KEygOrfeytWc3Il0/rBL7y1EdPjg91V6id3EfM/cN3FxsE4gq2rX7o5Ti9YEp+NUglt475tlYg4ipOfrQiKtjVxtHRNXz2c1uyDEREXNnxfyyZ4OegVtoN8o9Y9Nw3l40dNO/pCwAA0D/6577uvbiRy5D56rernv2mkHecuvbbN8YpLn+0YM6riQabAeERnqWpRz/+Xfp12dnN/rVNVlYkEKsZ8eDsoZowPzljzly3dO7/njEOmLR85eDsnd99snpBsyb5v1EJrzyxdnuNKmx27HDKPH72qslBxpe1a97T1wAAoH/0Q+7fk9U7jIzL/nDli3u17KAln36zJsjKlLhx/Vk9ySe+fuz4sx4Zb0WNePvi3nXfXjn50lsx27edLRe8Fr35yYuBEiJT4qYN5/SknPunD1+doSh1uDz5rfM7t53+KLKqSi8QYxc46w/rlgfbmloEOSN1X3l7cwCA35a+nue5V0s2+Ypt/7s2sZ5sJr/65kIPlgRd7uVSjlj3iHAPlmRBEWFKhsx5ly6bbm/Ztqeg++n5CO/goHFvnTORYKiqNNhPf2yeh5Qv2f77kV6jl649eh3rhQDgftCn4/07zembepeqXHlJla1CZmw89fFnZ5e9OdZGEAQiov+7lAhEREwHBfA8T0Ss28K1/37cr20AL3EJV0k8Ht6QNGj8W3957+tTWXveiE2v3Xfh44mY1wGA37i+G+/fIfRruAZG6N2UCeseszFtx2o/iSnr8xfeTWth7INDB0iIL09OKeHJdDklXS+Q1D84UEYSqYSIhOamltZLgUPgEHcJCXVadui8efMXzpu/8IHxUcEDrDh9g9El6umPT6Se+lukTDCXnE0p4ej25gAAvzHdGO/fIbiJaPKxs3KhRU4tVtRiLTQrqNGO9LaC3k5osBP0n0f9K7Sl44Z/L50u97brVtEdYB29fL0mTHpr0baHt6e9/6dPFh98ftUzEza8dOL036eN3KsuS7lkZp3mrX40SMK2DPZyYKky65Mls06pPR/+ftMTq58Z9+UrpxLXzoxOnerPVl48nRa2LmfD8C0xke82jJs0zFV/poAj1tHf11VCrPq25l895dXb4gEA+hA7+d0LrY8ud73z/HvFqNEtjLyF5EaSNzPWjaTQk52BsdMzyk/G/YtjqMPHy6WTZ3ofttTJMC4P/vV/JtmR4ew/n9tQ6LN6S9z7T032bMpOzjMNnLjqo5++XTaQJbKZ8uJ7j0a62+ivXMxtVKptGEnQMz8c+mDVNG9T2t7vvjtwrt5r5mQfCaMInDDaseTUtvVf7b9iG7bola/fnaOi9s0tVTwAQN9gAl463vps+zK1X1BYlw06G/UHGIiIPM7ePuo/MXZ5Z109f33q415He1I1AAD0VLfn9w1GQUGK9ttbx+/FY24Z9f8ctbyzkf6K8jkIfQCAvteT+7pao6F99HM3HkU3oj957Fzupu03P5aXL31u4E+WqB8AALqnh+s4tUaDxkrRRE2/bOFuuoIURI2+Q9tHKh95ccD3PTsuAAD0Us/XcVYZGx3J8Zc/Oxva3/aYp419zQ2hDwDQb3q1fr/EWONMzq3PeabrR3TVsvdcN1uibAAA6KHefm6ryFg5iAYRdXzz9ubHyLrFX7h8a4maAQCg5yzwed3Lxqs+5HPn0B9bt2yr47beHwsAAHrJMt/TkGEsEEwanqjDh63Oe4sDRvoAAL8KFvt+Hu7cNWoZ1H6kb9MwuKm52qvCxVIHAgCA3rBY7vPE8snZ1OR/841ceaOzqamW4eUCJ/cqCbDUsQAAoMcsmvvEMinpjCG0dXpHWT2EGlpaQ5/hbQReMbhwvKUOBwAAPWO5eR5iWqOfTT3H6IerqkPMpus3hz5xdgKnHJj7sKWOCAAAPWC58T7D/BL9ganfc6bi9qEv8PYC7+iR+aqlDgoAAN1lsdwXiG2Nfj+hiBV435z4DkOf59Q8p3FJ/8ZSxwUAgG6x2O8sCkREbKCQywichHgJcUOu7Lo8aGX70OcFJ553dkw5Vxs5ylJH53W5J3fvTrOZsWZJeIffiC/ocuPjDqdfq+NtPYZMmD9lqKbdmRurL8fHn7l4VWsgWze/UTOnjhxg3ekBGzO2/TvZbcXjE91ZIjKVndn6XYbj3EfmDLHr+GuqhYaUzXH83MUjHe704zWWaQUAcCcWHO8zwXweK/AS4lniWOIkxA2/+kmHoc/xTgKvVp2ptsihm0oSdn0XV8badBqOQv3FA7sz2RELn3r2kSnuZUd3nCnjbt+nseD8+XL1qJjHVj+zeKJL5Yntpwrb/QZ7x5035B7ansJGLZjZWegTUdO1wtJ2h+xSz1oBANyJxcb7IXwuK3AS4iTEteW+wEnJNK7shXjn3e1Dn+cceUFpm0SGsb08srHmqtZp2uNhNTu/vdbxHkJDzuUSdfiK0QPVDKmnRuV9fCyjeKy71y0/6asYMnP5kLbnoRNC0y5ll9cL3pquBtqmiqQdh697z1o2zqX1tWy+nnr04Pnc8kZW5R40fsqUcBcrQ87eLw7lNXF5H71/lHWdtOaxKGempfTCkbhzueVNMo3PiJnTxgxWMIZrifuPpxRUN7M2Du5DJs90u7z55lbLo5x7+UoBAJAFc//MuDssz59hqaN0xMpz3CJPEmqSOv0ZSL6qokbuPqZtskTm6ubUlF3WIHh1OnsiNDY2snZK265CX9Dn7N+bLB37yCxf27YNWQe2JLWMnP34Yo1Qnnbwx12HbJbPCwqc90RD/ed5Qc883DZjY8g5uPU8N3H+ylilIfPnnduPqNbMUyUcPGcMX/JsqD2vqyhudNB4z3tCf0srAAALsNg8z68Z39xklNtYt2UnY62woUZDU6eXCcGQk3SZDx3u38Vv55orEvftz6DgicOc2y6fQkPWxSuKYdETvJ1USk3AuCnhspyzObrbjyQ0ZKXl24dHR7orbezcIkYOkRdmFTTyHE+M1FphY+vg6jPUWy2K/xoA6HsWG+//mglCu4xnmM5G0KbyxJ+OagPnr/CW37lXvv66zme4X86Fo8lhT4xxkRARX1tVx7iEa9oim9W4OdHF6lqelLe2rNHWmMrKv37vbOuf5hbexWAaEDU54IfDX36aGzJq5KhIH7VVd08TAOBuiCL3JQqFVUtTc1v4C81NzWRtI+8o+M1Vyft2piiiH5s0uPO1PG1Ydfis6EnKAQ3r4+JO+zw60UVKRB1cYYjaHUkQSOozaflcX9mNnSTWthIrx9mrBo/ITj8Tv39TSuCCFTP8unWWAAB3RRSTCRJnD2djWUVdayabKsuqrJxdVe3SmK+9eGB7AjMudnao4928LgxDRHaB02cF6E8fOlNmJmIdnR2Fysoqvq3DqvJqcnJSM63vL35528E6ahyE6tpGW6VS1fqwU1gxRESsjUvwmPlPLgqnrPSClltbAQBYxP2b++ai4198sPWcViAiu6ChPvUXjp8rqanT5hxLzLUKCB4kuXUfoeHyoW37KwdOGulq1JaVlpeVVmh1d7WQUxEUPSOk6ey+s2VmRhUS7t988Vh8UY3eUFOQdPxCi19kgJIhRmFnJ6kuzNUaGg1NZkYVMty35eKhuEvXaxp0NeX5qRlXDZw2Oz33eq2+2ajXVlQ3WyuV0ltb3duXCwBE4z6e5xF4gb8xVrYNeuCh2gNxP248YrJ28ZscM3Gw7LZ9WorSLtcYuZq9WzLa2jPqqNiV0z3u4spo4z99WvD6vXHxPsujA2fFtvwcd+TrhAbBzi0w+sFpIbZERFY+Y6MH/xT//WcnXSeseHiM85DZsS3Hj5zZ/vmhFtZGM3jYlCBG0BXGHzhRpTdL7TTeo2eP95IQc3OrR8ZgHScAWAAT8NLx1mfbl6n9gsL6txoAALjX7t95HgAA6AhTqq1rfaYtvYrxPgDAfQ/jfQAAcUHuAwCIC3IfAEBckPsAAOKC3AcAEJf/D7A0eLKYY7ElAAAAAElFTkSuQmCC"},27271:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/test_explorer_tests-1da24265be478f4b9ca821cbf6157d17.png"}}]);