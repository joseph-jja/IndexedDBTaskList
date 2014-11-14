define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <tr>\n            <td><button id=\"task-"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Edit ("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</button></td>\n            <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.short_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.long_description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td nowrap>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.work_date)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n            <td>";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.value)),stack1 == null || stack1 === false ? stack1 : stack1.completed), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n        </tr>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "Done";
  }

function program4(depth0,data) {
  
  
  return "Working";
  }

  buffer += "<div>\n    <button id=\"addTaskID\">Add Task</button>\n    <select id=\"filterDisplay\">\n        <option value=\"week\">Week</option>\n        <option value=\"month\">Month</option>\n        <option value=\"working\">Still Working On</option>\n        <option selected=\"selected\" value=\"all\">All</option>\n    </select>\n    <table id=\"taskList\">\n        <tr>\n            <th>Edit</th>\n            <th>Short Description</th>\n            <th>Long Description</th>\n            <th>Last Access Date</th>\n            <th>Status</th>\n        </tr>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.taskListItem), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </table>\n</div>";
  return buffer;
  })

});