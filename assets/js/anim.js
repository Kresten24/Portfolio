$(function () {
  var skill = [$("#Skill-Git"), $("#Skill-HTML-CSS"), $("#Skill-Bootstrap"), $("#Skill-JavaScript"), $("#Skill-Jquery"), $("#Skill-Java"), $("#Skill-Python"), $("#Skill-PHP"), $("#Skill-NodeJS"),
  $("#Skill-MySql"), $("#Skill-Ruby"), $("#Skill-MongoDB"), $("#Skill-NPM"), $("#Skill-Cloud9"), $("#Skill-Blender"), $("#Skill-UnitTests"), $("#Skill-English"), $("#Skill-French"),
  $("#Skill-Armenian"), $("#Skill-Arabic"), $("#Skill-Turkish"), $("#Skill-Photoshop"), $("#Skill-Illustrator")];
  var skillClass = ["git", "htmlcss", "bootstrap","js", "jq", "java", "python", "php", "nodejs", "mysql", "ruby", "mongodb", "npm", "cloud9", "blender", "unitTests", "english", "french", "armenian", "arabic", "turkish",
"photoshop", "illustrator"];
  $(window).scroll(function () {
    if($(window).scrollTop() > 0) {
      for(var i=0; i<=skill.length; i++){
        skill[i].addClass(skillClass[i]);
      }
    }
  });
});
