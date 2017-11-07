$(document).ready(function() {
  $.getJSON("json/new_phones.json", function(result) {
    var obj_new_phones = result;

    var container = document.querySelector(".slider_content");
    var s = obj_new_phones.slice(0, 4);
    for (var i = 0; i < s.length; i++) {
      var obj__new_phones_output = '<div class="slider_item">' +
      '<div>' +
      '<p class="item_name">' + obj_new_phones[i].name + '</p>' + '<p class="item_hidden_text">' +
       obj_new_phones[i].hidden + '</p>' + '<p class="item_price_hidden">' + obj_new_phones[i].price +
        '</p>' + '<p>הוסף להשוואה</p>' + '<button class="item_btn">לצפייה במוצר</button>' + '</div>' +
        '<img src =' + obj_new_phones[i].url + ' class="item_img">' + '<p class="item_name">' +
         obj_new_phones[i].name + '</p>' + '<p class="item_price">' + obj_new_phones[i].price + '</p>' + '</div>';
      container.innerHTML += obj__new_phones_output;
    };
  });

  $(".best_sold").click(function() {
    $(".slider_content").html("");
    $.getJSON("json/best_sold.json", function(result) {
      var obj = result;

      var container = document.querySelector(".slider_content");
      var v = obj.slice(0, 4);
      for (var i = 0; i < v.length; i++) {
        var obj__best_sold_output = '<div class="slider_item">' +
        '<div>' +
        '<p class="item_name">' + obj[i].name + '</p>' + '<p class="item_hidden_text">'
         + obj[i].hidden + '</p>' + '<p class="item_price_hidden">' + obj[i].price +
         '</p>' + '<p>הוסף להשוואה</p>' + '<button class="item_btn">לצפייה במוצר</button>' +
          '</div>' + '<img src =' + obj[i].url + ' class="item_img">' + '<p class="item_name">' + obj[i].name +
           '</p>' + '<p class="item_price">' + obj[i].price + '</p>' + '</div>';
        container.innerHTML += obj__best_sold_output;
      };

    });
  });

  $(".new_phones").click(function() {
    $(".slider_content").html("");
    $.getJSON("json/new_phones.json", function(result) {
      var obj_new_phones = result;

      var container = document.querySelector(".slider_content");
      var s = obj_new_phones.slice(0, 4);
      for (var i = 0; i < s.length; i++) {
        var obj__new_phones_output = '<div class="slider_item">' +
        '<div>' +
        '<p class="item_name">' + obj_new_phones[i].name + '</p>' + '<p class="item_hidden_text">' +
         obj_new_phones[i].hidden + '</p>' + '<p class="item_price_hidden">' + obj_new_phones[i].price +
          '</p>' + '<p>הוסף להשוואה</p>' + '<button class="item_btn">לצפייה במוצר</button>' + '</div>' +
           '<img src =' + obj_new_phones[i].url + ' class="item_img">' + '<p class="item_name">' +
            obj_new_phones[i].name + '</p>' + '<p class="item_price">' + obj_new_phones[i].price +
             '</p>' + '</div>';
        container.innerHTML += obj__new_phones_output;

      };

    });
  });
  $(".second_hand").click(function() {
    $(".slider_content").html("");
    $.getJSON("json/second-hand.json", function(result) {
      var second_hand_phones = result;

      var container = document.querySelector(".slider_content");
      var s = second_hand_phones.slice(0, 4);
      for (var i = 0; i < s.length; i++) {
        var second_hand_output = '<div class="slider_item">' +
        '<div>' +
        '<p class="item_name">' + second_hand_phones[i].name + '</p>' + '<p class="item_hidden_text">' +
         second_hand_phones[i].hidden + '</p>' + '<p class="item_price_hidden">' + second_hand_phones[i].price +
          '</p>' + '<p>הוסף להשוואה</p>' + '<button class="item_btn">לצפייה במוצר</button>' + '</div>' +
           '<img src =' + second_hand_phones[i].url + ' class="item_img">' + '<p class="item_name">' +
            second_hand_phones[i].name + '</p>' + '<p class="item_price">' + second_hand_phones[i].price +
             '</p>' + '</div>';
        container.innerHTML += second_hand_output;

      };

    });
  });
});
