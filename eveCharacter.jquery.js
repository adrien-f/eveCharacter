//
// eveCharacter.jquery.coffee
//
// https://github.com/sakacoco/eveCharacter
//
// Copyright (c) 2012 Adrien Fillon <adrien.fillon@gmail.com>. All rights reserved.
//

(function() {
  var $;

  $ = jQuery;

  $.fn.eveCharacter = function() {
    var template_content, template_link, template_title;
    template_title = function(name, characterid) {
      return name + ' <img src=&quot;http://image.eveonline.com/Character/' + characterid + '_32.jpg&quot; width=&quot;32px&quot; alt=&quot;' + name + '&quot;>';
    };
    template_content = function(corporationname, alliancename) {
      var a, b;
      a = '<ul><li><b>Corporation :</b> ' + corporationname + '</li>';
      b = '';
      if (alliancename) {
        b = '<li><b>Alliance :</b> ' + alliancename + '</li>';
      }
      return a + b + '</ul>';
    };
    template_link = function(title, content, name) {
      return '<a class="evecharacter" rel="popover" data-content="' + content + '" data-original-title="' + title + '">' + name + '</a>';
    };
    return this.each(function() {
      var character, el;
      el = $(this);
      if (el.children('a').length > 0) {
        return false;
      }
      character = el.text();
      return $.ajax({
        type: 'GET',
        url: 'http://api.eveonline.com/eve/CharacterID.xml.aspx?names=' + character,
        dataType: 'xml'
      }).done(function(res) {
        var characterid, row;
        row = $(res).find('row')[0];
        characterid = $(row).attr('characterID');
        if (characterid === '0') {
          return false;
        } else {
          return $.ajax({
            type: 'GET',
            url: 'http://api.eveonline.com/eve/CharacterInfo.xml.aspx?characterID=' + characterid,
            dataType: 'xml'
          }).done(function(res) {
            var alliancename, corporationname;
            corporationname = $(res).find('corporation').text();
            alliancename = $(res).find('alliance').text();
            el.html(template_link(template_title(character, characterid), template_content(corporationname, alliancename), character));
            return el.children('a').popover('show');
          });
        }
      });
    });
  };

}).call(this);
