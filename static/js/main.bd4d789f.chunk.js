(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,s){e.exports={"blog-posts-header":"blog-posts_blog-posts-header__7hwiX","create-new-post-icon":"blog-posts_create-new-post-icon__797SX","posts-list":"blog-posts_posts-list__1Hy3k","post-header":"blog-posts_post-header__25FJL","delete-post-icon":"blog-posts_delete-post-icon__3lWT5","post-body":"blog-posts_post-body__3dMRP"}},23:function(e,t,s){e.exports={form:"new-post-form_form__3Jk81","back-to-list-link":"new-post-form_back-to-list-link__1A189"}},26:function(e,t,s){e.exports={header:"header_header__2c7h-","inner-container":"header_inner-container__8yrCU"}},39:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(1),o=s(25),n=(s(39),s(26)),r=s(30),a=s(3),i=s(5),l=s(28),j=s(27),d=s(12),b=s(4),h=function(e){var t=Object(c.useState)(),s=Object(i.a)(t,2),o=s[0],n=s[1],r=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return n(e)}))};return Object(c.useEffect)((function(){r()}),[]),Object(b.jsxs)("section",{className:"blog-posts",children:[Object(b.jsxs)("section",{className:d["blog-posts-header"],children:[Object(b.jsx)("h2",{children:"Blog Posts"}),Object(b.jsx)("a",{href:"new-post",className:d["create-new-post-icon"],onClick:function(){e.setCurrentView("create-new-post")},children:Object(b.jsx)(j.a,{})})]}),o&&Object(b.jsx)("ul",{className:d["posts-list"],children:o.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:d["post-header"],children:Object(b.jsx)("h2",{children:e.title})}),Object(b.jsx)("div",{className:d["post-body"],children:Object(b.jsx)("p",{children:e.body})}),Object(b.jsx)("div",{title:"Delete post",className:d["delete-post-icon"],onClick:function(){var t;t=e.id,fetch("https://jsonplaceholder.typicode.com/posts/".concat(t),{method:"DELETE"}).then((function(e){r(),alert("Post deleted! (Not really \ud83d\ude1b)")}))},children:Object(b.jsx)(l.a,{})})]},t)}))})]})},p=s(29),u=s(23),O=function(e){var t=Object(c.useState)(""),s=Object(i.a)(t,2),o=s[0],n=s[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),l=a[0],j=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(e),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({title:o,body:l,userId:1}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){alert("\n          Post Title: ".concat(e.title,"\n          Post Body:\n            ").concat(e.body,"\n          "))}))},className:u.form,children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Title"}),Object(b.jsx)("input",{required:!0,type:"text",name:"title",placeholder:"Post Title",onChange:function(e){n(e.target.value)}})]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{children:"Body"}),Object(b.jsx)("textarea",{required:!0,placeholder:"Please write some content for your blog post",name:"body",onChange:function(e){j(e.target.value)}})]}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]}),Object(b.jsxs)("a",{href:"/",className:u["back-to-list-link"],children:[Object(b.jsx)(p.a,{}),"Back to post list"]})]})};function x(){var e=Object(r.a)([{path:"/",element:Object(b.jsx)(h,{})},{path:"new-post",element:Object(b.jsx)(O,{})}]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:n.header,children:Object(b.jsxs)("div",{className:"inner-container",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("a",{href:"/",children:"Zoega React Test"})}),Object(b.jsxs)("span",{children:["By ",Object(b.jsx)("a",{href:"https://github.com/guidolarosa",children:"Guido La Rosa"})]})]})}),Object(b.jsx)("main",{children:Object(b.jsx)(a.b,{router:e})})]})}var f=document.getElementById("root");Object(o.createRoot)(f).render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(x,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.bd4d789f.chunk.js.map