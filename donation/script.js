$("#contribution").find("input").addClass("form-control");
$("#contribution").find("select").addClass("form-control");
$("#contribution").prepend('<div id="gift-aid-wrap" class="donation-block clearfix"></div>');
$("#contribution").prepend('<div id="payment-details" class="donation-block clearfix"></div>');
$("#contribution").prepend('<div id="your-details" class="donation-block clearfix"></div>');
$("#contribution").prepend('<div id="amounts" class="donation-block clearfix"></div>');

// Payment Details
$("#payment-details").append('<div id="payment-card" class="clearfix"></div>');
$("#payment-details").append('<div id="payment-card-details" class="clearfix"></div>');
$('#credit_card-creditCardTypeSelector').appendTo('#payment-card');
$('.creditCardTypeSelector-creditCardTextBox, .creditCardTypeSelector-creditCardList').addClass('clearfix form-group');
$('#cc_cvv, #cc_expir_month, #cc_expir_year').appendTo('#payment-card-details');
$('#cc_cvv, #cc_expir_month, #cc_expir_year').wrapAll('<div class="row">')
$('#cc_cvv, #cc_expir_month, #cc_expir_year').wrap('<div class="col">')
$("#credit_card-creditCardNumberTextBox").attr("placeholder", "Card Number");
$("#cc_cvv").attr("placeholder", "CVV");
$("#payment-details").prepend('<h2>Payment Details</h2>');

// Amounts

$("label[for='amt_preset_1']").wrap("<div id='amt_preset_1_wrap'>");
$("label[for='amt_preset_1']").prepend($("#amt_preset_1"));

$("label[for='amt_preset_2']").wrap("<div id='amt_preset_2_wrap'>");
$("label[for='amt_preset_2']").prepend($("#amt_preset_2"));

$("label[for='amt_preset_3']").wrap("<div id='amt_preset_3_wrap'>");
$("label[for='amt_preset_3']").prepend($("#amt_preset_3"));

$("label[for='amt_preset_4']").wrap("<div id='amt_preset_4_wrap'>");
$("label[for='amt_preset_4']").prepend($("#amt_preset_4"));

$("label[for='amt_preset_5']").wrap("<div id='amt_preset_5_wrap'>");
$("label[for='amt_preset_5']").prepend($("#amt_preset_5"));

$("label[for='amt_preset_6']").wrap("<div id='amt_preset_6_wrap'>");
$("label[for='amt_preset_6']").prepend($("#amt_preset_6"));

$("label[for='amt_preset_7']").wrap("<div id='amt_preset_7_wrap'>");
$("label[for='amt_preset_7']").prepend($("#amt_preset_7"));

$("label[for='amt_other']").wrap("<div id='amt_other_wrap'>");
$("label[for='amt_other']").prepend($("#amt_other"));
$("label[for='amt_other']").append($("#amt_other_text"))

$("#amt_other_wrap").addClass("amountWraps");
$("#amt_preset_7_wrap").addClass("amountWraps");
$("#amt_preset_6_wrap").addClass("amountWraps");
$("#amt_preset_5_wrap").addClass("amountWraps");
$("#amt_preset_4_wrap").addClass("amountWraps");
$("#amt_preset_3_wrap").addClass("amountWraps");
$("#amt_preset_2_wrap").addClass("amountWraps");
$("#amt_preset_1_wrap").addClass("amountWraps");

$("#amounts").append($("#amt_preset_1_wrap"));
$("#amounts").append($("#amt_preset_2_wrap"));
$("#amounts").append($("#amt_preset_3_wrap"));
$("#amounts").append($("#amt_preset_4_wrap"));
$("#amounts").append($("#amt_preset_5_wrap"));
$("#amounts").append($("#amt_preset_6_wrap"));
$("#amounts").append($("#amt_preset_7_wrap"));
$("#amounts").append($("#amt_other_wrap"));

$('#full-gift-container  tr:nth-child(1) td').wrapInner("<div class='fullgift-wrap form-check form-check-inline'>");
$("#amounts").append($(".fullgift-wrap"))
$("#full-gift-container").remove();
$('.fullgift-wrap').attr('id', 'full-gift-container');

$("#amounts").prepend('<h2>Select an Amount</h2>');

$(".amountWraps").addClass("col");
$("#amt_other_wrap").removeClass("col");
$("#amt_other_wrap").addClass("col-8");
$(".amountWraps").wrapAll("<div class='amountRow'></div>");

$("#amt_preset_1_wrap, #amt_preset_2_wrap, #amt_preset_3_wrap").wrapAll("<div class='row'></div>");
$("#amt_preset_4_wrap, #amt_preset_5_wrap, #amt_preset_6_wrap").wrapAll("<div class='row'></div>");
$("#amt_preset_7_wrap, #amt_other_wrap").wrapAll("<div class='row'></div>");

$("#full-gift-checkbox").removeClass("form-control");
$("#full-gift-checkbox").addClass("form-check-input");
$("label[for='full-gift-checkbox']").addClass("form-check-label");


// Your Details
$('#state_cd').remove();

$('#firstname').attr("placeholder", "First Name");

$('#lastname').attr("placeholder", "Last Name");

$('#addr1').attr("placeholder", "Address 1");

$('#addr2').attr("placeholder", "Address 2");

$('#city').attr("placeholder", "City");

$('#zip').attr("placeholder", "Postcode");

$('#email').attr("placeholder", "Email");


$(".contribcolumn:eq(0)").find("input, select").each(function() {
  $(this).wrap("<div class='form-group form-order'></div>");
  $('.form-order').appendTo("#your-details");
});
$("#your-details").prepend("<h2>Your Details</h2>")

// Giftaid

$(".giftaid_confirm_checkbox").each(function() {
  var GiftAid = $(".giftaid_confirm_checkbox").attr('id');
  $("#gift-aid-wrap").prepend('<h2>Add Giftaid</h2>');
  $(this).appendTo('#gift-aid-wrap');
  $(this).addClass('form-check-input');
  $('#gift-aid-wrap').append('<label class="form-check-label gift-aid-label">Yes, I want to Gift Aid this donation, any future donations I make in the future, or any donation I have made in the past fours year to Reprieve. </label>');
  $('.gift-aid-label').attr('for', GiftAid);
  $('#gift-aid-wrap .form-check-input, #gift-aid-wrap .form-check-label').wrap('<div class="form-check"></div>');
  $('#gift-aid-wrap').append("<p>I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all of my donations in that tax year it is my responsibility to pay any difference.</p>");
  $('.gift-aid-label').attr('for', GiftAid);
});

// Buttons

$("#amounts").append('<button class="btn donate-nav donate-nav-next" id="amounts-next">Next</button>');
$("#your-details").append('<button class="btn donate-nav donate-nav-back" id="your-details-back">Back</button>');
$("#your-details").append('<button class="btn donate-nav donate-nav-next" id="your-details-next">Next</button>');
$("#payment-details").append('<button class="btn donate-nav donate-nav-back" id="payment-details-back">Back</button>');
$("#payment-details").append('<button class="btn donate-nav donate-nav-next" id="payment-details-next">Next</button>');
$("#gift-aid-wrap").prepend('<button class="btn donate-nav donate-nav-back" id="giftaid-back">Back</button>');

$('#amounts-next').click(function() {
$("#amounts").toggleClass('showDonate');
$("#your-details").toggleClass('showDonate');
});

$('#your-details-back').click(function() {
$("#amounts").toggleClass('showDonate');
$("#your-details").toggleClass('showDonate');
});

$('#your-details-next').click(function() {
$("#payment-details").toggleClass('showDonate');
$("#your-details").toggleClass('showDonate');
});

$('#payment-details-back').click(function() {
$("#payment-details").toggleClass('showDonate');
$("#your-details").toggleClass('showDonate');
});

$('#payment-details-next').click(function() {
$("#payment-details").toggleClass('showDonate');
$("#gift-aid-wrap").toggleClass('showDonate');
});

$('#giftaid-back').click(function() {
$("#payment-details").toggleClass('showDonate');
$("#gift-aid-wrap").toggleClass('showDonate');
});


// Finish

$("#processbutton").appendTo("#gift-aid-wrap");
$("#contribution table").hide();
