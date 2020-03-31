(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HO6Z:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/dynamic-response-with-templating",function(){var e=n("uWQW");return{page:e.default||e}}])},uWQW:function(e,l,n){"use strict";n.r(l);var t=n("q1tI"),a=n.n(t),r=n("kB0P"),o=n("k6ZC"),u=a.a.createElement,i={title:"Create dynamic responses with templating",description:"Create dynamic responses for your mock server with Mockoon's templating system."};l.default=function(){return u(r.a,{meta:i},u("div",{className:"content"},"Mockoon's implements ",u("a",{href:"https://github.com/webroo/dummy-json",target:"_blank"},"Dummy JSON")," library in order to create dynamic responses. This templating system is supported in response's ",u("strong",null,"body"),", ",u("strong",null,"headers"),", ",u("strong",null,"file content"),", and ",u("strong",null,"file path"),".",u("h3",null,"Available helpers"),u("p",null,"Dummy JSON offers lots of built-in helpers: ",u("code",null,"repeat"),", ",u("code",null,"int"),", ",u("code",null,"float"),", ",u("code",null,"date"),", ",u("code",null,"time"),", ",u("code",null,"title"),", ",u("code",null,"firstName"),", ",u("code",null,"lastName"),", ",u("code",null,"company"),", ",u("code",null,"latitude"),", ",u("code",null,"longitude"),", ",u("code",null,"domain"),", ",u("code",null,"TLD"),", ",u("code",null,"email"),", ",u("code",null,"street"),", ",u("code",null,"city"),", ",u("code",null,"country"),", ",u("code",null,"phone"),", ",u("code",null,"color"),", ",u("code",null,"hexColor"),", ",u("code",null,"guid"),", ",u("code",null,"ipv4"),", ",u("code",null,"ipv6"),", ",u("code",null,"lorem"),", ",u("code",null,"lowercase"),", ",u("code",null,"uppercase"),", etc. Please have a look at ",u("a",{href:"https://github.com/webroo/dummy-json#available-helpers",target:"_blank"},"Dummy JSON documentation")," to learn how to use them."),u("p",null,"In addition to these helpers, some custom ones have been added to Mockoon:"),u("ul",null,u("li",null,u("code",null,"array 'item1' 'item2' 'item3'"),": create an array from items (to be used in the next helpers oneOf, someOf)"),u("li",null,u("code",null,"oneOf (array 'item1' 'item2' 'item3')"),": select a random item in the array passed in parameters"),u("li",null,u("code",null,"someOf (array 'item1' 'item2' 'item3') x y"),": returns x to y random items from the array passed in parameters concatenated as a string (to be used with double curly braces), result is the following: ",u("code",null,"item1,item2")),u("li",null,u("code",null,"{{{someOf (array 'item1' 'item2' 'item3') x y true}}}"),": returns x to y random items from the array passed in parameters as an array (to be used with triple curly braces), result is the following: ",u("code",null,'["item1","item2"]')),u("li",null,u("code",null,"#switch ... #case ... #default"),": select content depending on a variable, like a normal switch :) (see example below)")),u("p",null,"Mockoon also supports the following helpers which can gather request information:"),u("ul",null,u("li",null,u("code",null,"body 'path' 'default value'"),": get a path from a request body's JSON by default or from form params if request's ",u("code",null,"Content-Type")," header is set to ",u("code",null,"application/x-www-form-urlencoded"),". Path has the following form ",u("code",null,"key.0.key.5.key")," for JSON (syntax is based on ",u("a",{href:"https://www.npmjs.com/package/object-path"},"NPM ",u("strong",null,"object-path")," package"),"), or directly a param name like ",u("code",null,"firstname")," for form params."),u("li",null,u("code",null,"urlParam 'paramName1'"),": get a param from the URL ",u("code",null,"/:paramName1/:paramName2")),u("li",null,u("code",null,"queryParam 'param1' 'default value'"),": get a param from the query string ",u("code",null,"?param1=xxx&param2=yyy")," or a default value if param is not present"),u("li",null,u("code",null,"header 'Header-Name' 'default value'"),": get content from any request header or a default value if header is not present"),u("li",null,u("code",null,"hostname"),": get request hostname"),u("li",null,u("code",null,"ip"),": get request IP address"),u("li",null,u("code",null,"method "),": get request method (GET, PUT, POST, etc.)"),u("li",null,u("code",null,"now 'YYYY-MM-DD'"),": display current time in the chosen format. Format syntax is based on ",u("a",{href:"https://date-fns.org/v1.30.1/docs/format"},"date-fns package")," and is optional. Without providing it this helper will display an ISO string")),u("p",null,u("em",null,"Please note that a space always follows the helper name and separates each and all params like in ",u("code",null,"oneOf\xa0*space*\xa0(array\xa0*space*\xa0'item1'\xa0*space*\xa0'item2')"),". Also, parenthesis serve to prioritize a helper over another and not to symbolize a function call. Helpers does not require parenthesis in order to work.")),u("h3",null,"Body and file content templating"),u("p",null,"Templating will work in the body textarea without consideration for the Content-Type that has been defined. It will also work with files content for a limited set of MIME types (",u("code",null,"application/json"),", ",u("code",null,"text/html"),", ",u("code",null,"text/css"),", ",u("code",null,"text/csv"),", ",u("code",null,"application/javascript"),", ",u("code",null,"application/typescript"),", ",u("code",null,"text/plain"),", ",u("code",null,"application/xhtml+xml"),", ",u("code",null,"application/xml"),")."),u("p",null,"Here is an example of what you can do with this templating system:"),u("p",null,u("code",null,"{",u("br",null),'   "userId": "{{ urlParam \'id\'}}",',u("br",null),"   \"name\": \"{{ queryParam 'name' 'John' }}\",",u("br",null),"   \"lang\": \"{{{header 'Accept-Language' 'en'}}}\",",u("br",null),"   \"elementTitle\": \"{{ body 'elements.0.title' 'default' }}\",",u("br",null),'   "ip": "{{ ip }}",',u("br",null),'   "method": "{{ method }}",',u("br",null),'   "hostname": "{{ hostname }}",',u("br",null),'   "friends": [',u("br",null),"     {{#repeat 2}}",u("br",null),"     {",u("br",null),'       "id": {{@index}},',u("br",null),'       "name": "{{ firstName }} {{ lastName }}"',u("br",null),"     }",u("br",null),"     {{/ repeat}}",u("br",null),"   ],",u("br",null),"   \"oneItem\": \"{{ oneOf (array 'item1' 'item2' 'item3') }}\",",u("br",null),"   \"someItemsAsString\": \"{{ someOf (array 'item1' 'item2' 'item3') 1 2 }}\",",u("br",null),"   \"someItemsAsArray\": {{{ someOf (array 'item1' 'item2' 'item3') 1 2 true }}},",u("br",null),'   "userName":',u("br",null),"     {{#switch (urlParam 'id')}}",u("br",null),'       {{#case "1"}}"John"{{/case}}',u("br",null),'       {{#case "2"}}"Jack"{{/case}}',u("br",null),'       {{#default}}"Peter"{{/default }}',u("br",null),"     {{/switch}}",u("br",null),"}"))),u(o.default,{src:"/static/images/tutorials/body-templating.jpg",alt:"Body response templating",size:"medium"}),u("div",{className:"content"},u("p",null,"And the response you can get with the following request:"),u("p",null,u("code",null,"GET /user/123456?name=john",u("br",null),"Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",u("br",null),"Body:",u("br",null),"{",u("br",null),'  "element": [{"title": "My title"}]',u("br",null),"}"),u("br",null),u("br",null),"Response:",u("br",null),u("code",null,"{",u("br",null),'  "userId": "5",',u("br",null),'  "name": "john",',u("br",null),'  "lang": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",',u("br",null),'  "elementTitle": "My title",',u("br",null),'  "ip": "::1",',u("br",null),'  "method": "GET",',u("br",null),'  "hostname": "localhost",',u("br",null),'  "friends": [',u("br",null),"    {",u("br",null),'      "id": 0,',u("br",null),'      "name": "Stephen Bradbury"',u("br",null),"    },",u("br",null),"    {",u("br",null),'      "id": 1,',u("br",null),'      "name": "Warren Caffey"',u("br",null),"    }",u("br",null),"  ],",u("br",null),'  "oneItem":"item1",',u("br",null),'  "someItemsAsString":"item2",',u("br",null),'  "someItemsAsArray":["item2", "item3"],',u("br",null),'  "userName":"John"',u("br",null),"}")),u("p",null,"This system is flexible enough so you can generate a lot of different contents like CSV files:"),u("p",null,u("code",null,"firstname,lastname,countryCode",u("br",null),"{{#repeat 10}}",u("br",null),"  {{firstName}},{{lastName}},{{countryCode}}",u("br",null),"{{/repeat}}"),u("br",null),u("br",null),"Response:",u("br",null),u("code",null,"firstname,lastname,countryCode",u("br",null),"Max,Magby,AZ",u("br",null),"Stan,Muldoon,HM",u("br",null),"Drew,Rebelo,CY",u("br",null),"Cory,Neal,BG",u("br",null),"Grace,Whitson,CY",u("br",null),"Haydee,Backer,ET",u("br",null),"Erik,Friedrich,MX",u("br",null),"Stephen,Paquette,PH",u("br",null),"Neida,Durrett,PN",u("br",null),"Vaughn,Neal,MO"))),u("div",{className:"content"},u("h3",null,"File input templating"),u("p",null,"The ",u("strong",null,"file input field")," in each route also supports templating with the same helpers. This allows you to dynamically serve files depending on the request parameters, like ",u("code",null,"urlParam")," or any other helper. Example:"),u("p",null,"If you have a set of files named ",u("code",null,"./file1.json"),", ",u("code",null,"./file2.json"),", etc and a route named ",u("code",null,"/:id")," you can use the ",u("code",null,"urlParam")," helper in the file input: ",u("code",null,"c:/.../file{{ urlParam 'id'}}.json"),"."),u("p",null,"If you call this route with an id ",u("code",null,"/1"),", ",u("code",null,"./file1.json")," will be sent.")),u(o.default,{src:"/static/images/tutorials/file-input-templating.jpg",alt:"File input templating",size:"medium"}),u("div",{className:"content"},u("h3",null,"Headers templating"),u("p",null,"Finally, templating helpers are also supported in ",u("strong",null,"headers values")," (both route headers and environment headers):")),u(o.default,{src:"/static/images/tutorials/header-templating.jpg",alt:"Headers value templating",size:"medium"}))}}},[["HO6Z",1,0]]]);