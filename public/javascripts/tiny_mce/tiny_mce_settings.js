tinyMCE.init({
  editor_selector : "mceEditor",
  editor_deselector : "noMceEditor",
  mode : "textareas",
  theme : "advanced",
  // plugins : "safari,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,codeprotect,inlinepopups",
  plugins : "safari,style,table,save,advimage,advlink,emotions,inlinepopups,insertdatetime,preview,searchreplace,contextmenu,paste,fullscreen,nonbreaking,xhtmlxtras,codeprotect,inlinepopups",
  theme_advanced_buttons1 : "save,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,formatselect,|,forecolor,backcolor,|,nonbreaking,cite,abbr,acronym,del,ins,attribs,blockquote,",
  theme_advanced_buttons2 : "search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,",
  theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,|,fullscreen",
  theme_advanced_toolbar_location : "external",
  theme_advanced_toolbar_align : "left",
  theme_advanced_statusbar_location : "bottom",
  theme_advanced_resizing : true,
  relative_urls : false,
  file_browser_callback : "assetMethods.browserHook"
});