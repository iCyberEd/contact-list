(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var c=s(1),a=s.n(c),i=s(4),n=s.n(i),l=(s(13),s(2)),r=s(5),u=s(6),A=s(8),o=s(7),m=(s(14),s(0));var b=function(t){var e=t.user,s=t.setId,c=t.ids;function a(){return-1!==c.indexOf(e.id)}return Object(m.jsxs)("li",{className:a()?"contacts__user--active":"contacts__user",onClick:function(){a()?s("remove",e.id):s("set",e.id)},children:[Object(m.jsx)("div",{className:"contacts__user__image",children:Object(m.jsx)("img",{src:e.avatar,alt:e.first_name.slice(0,1)+e.last_name.slice(0,1),className:"contacts__user__icon"})}),Object(m.jsxs)("div",{className:"contacts__user__info",children:[Object(m.jsx)("div",{className:"contacts__user__name",children:e.first_name+" "+e.last_name}),Object(m.jsx)("div",{className:"contacts__user__email",children:e.email})]})]})};var d=function(t){var e=t.searchQuery,s=Object(c.useRef)(null);return Object(m.jsxs)("div",{className:"contacts__search",children:[Object(m.jsx)("button",{className:"contacts__search__button",onClick:function(){e(s.current.value)},children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABJmlDQ1BBZG9iZSBSR0IgKDE5OTgpAAAoz2NgYDJwdHFyZRJgYMjNKykKcndSiIiMUmA/z8DGwMwABonJxQWOAQE+IHZefl4qAwb4do2BEURf1gWZxUAa4EouKCoB0n+A2CgltTiZgYHRAMjOLi8pAIozzgGyRZKywewNIHZRSJAzkH0EyOZLh7CvgNhJEPYTELsI6Akg+wtIfTqYzcQBNgfClgGxS1IrQPYyOOcXVBZlpmeUKBhaWloqOKbkJ6UqBFcWl6TmFit45iXnFxXkFyWWpKYA1ULcBwaCEIWgENMAarTQZKAyAMUDhPU5EBy+jGJnEGIIkFxaVAZlMjIZE+YjzJgjwcDgv5SBgeUPQsykl4FhgQ4DA/9UhJiaIQODgD4Dw745AMDGT/0ZOjZcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAF8GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAzLTAyVDE4OjU1OjUwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAzLTAyVDE4OjU1OjUwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMy0wMlQxODo1NTo1MCswMTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiODE4ZmViZS03ZWM3LWYxNGQtOTIxMi0xODZmNjQ0OGVhMzEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3ZWMzOWI4Ni1hMDY2LTZmNGItYjE3Yy03YmIxYjE2YTQ4NWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2ZGNhMjY1ZS04MDAyLTcxNDgtYmI2Ny01MzY1NTFjMDBlYjQiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmRjYTI2NWUtODAwMi03MTQ4LWJiNjctNTM2NTUxYzAwZWI0IiBzdEV2dDp3aGVuPSIyMDIxLTAzLTAyVDE4OjU1OjUwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI4MThmZWJlLTdlYzctZjE0ZC05MjEyLTE4NmY2NDQ4ZWEzMSIgc3RFdnQ6d2hlbj0iMjAyMS0wMy0wMlQxODo1NTo1MCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwv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",alt:"",className:"contacts__search__icon"})}),Object(m.jsx)("input",{type:"text",className:"contacts__search__input",ref:s})]})},h=function(t){Object(A.a)(s,t);var e=Object(o.a)(s);function s(t){var c;return Object(r.a)(this,s),(c=e.call(this,t)).state={users:[],filtered:[],ids:[]},c}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){var s=e.response;4===this.readyState&&200===this.status&&(s.sort((function(t,e){return t.last_name<e.last_name?-1:t.last_name>e.last_name?1:0})),t.setState({users:s,filtered:s}))},e.open("GET","https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"),e.responseType="json",e.send()}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"contacts",children:[Object(m.jsx)("header",{className:"contacts__header",children:"Contacts"}),Object(m.jsx)(d,{searchQuery:function(e){e||t.setState({users:t.state.users,filtered:t.state.users,ids:t.state.ids}),t.setState({users:t.state.users,filtered:t.state.users.filter((function(t){return t.first_name.includes(e)||t.last_name.includes(e)})),ids:t.state.ids})}}),Object(m.jsx)("ul",{className:"contacts__list",children:this.state.filtered.map((function(e,s){return Object(m.jsx)(b,{user:e,ids:t.state.ids,setId:function(e,s){if("set"===e){var c=t.state.ids.slice(0);c.push(s),t.setState({users:t.state.users,filtered:t.state.users,ids:Object(l.a)(c)}),console.log(Object(l.a)(c))}else{var a=t.state.ids.indexOf(s),i=t.state.ids.slice(0);i.splice(a,1),t.setState({users:t.state.users,filtered:t.state.users,ids:Object(l.a)(i)})}}},s)}))})]})}}]),s}(a.a.Component),j=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,17)).then((function(e){var s=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,n=e.getTTFB;s(t),c(t),a(t),i(t),n(t)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.6d5716c5.chunk.js.map