define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form>\n    <input type=\"text\" name=\"task_id\" id=\"task_id\" disabled value=\"";
  if (stack1 = helpers.task_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.task_id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    \n    <label>Work Date: </label><input type=\"text\" name=\"work_date\" id=\"work_date\" value=\"";
  if (stack1 = helpers.work_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.work_date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" size=\"50\">\n\n    <label>Short Description: </label><input type=\"text\" name=\"short_description\" id=\"short_description\" size=\"80\">\n\n    <label>Long Description: </label>\n    <textarea name=\"long_description\" id=\"long_description\" ros=\"4\" cols=\"80\"></textarea>\n\n    <label>Completed: </label>\n    <input type=\"checkbox\" name=\"completed\" id=\"completed\">\n\n    <button id=\"cancelTask\">Cancel</button>\n    <button id=\"saveTask\">Save</button>\n    \n</form>";
  return buffer;
  })

});