(function () {
  "use strict";

  // Contents of dynamic components =================================================================== /
  var imageModule = '<div class="layout-module image-module image-only"><div class="move-and-delete-layout-module button-group"><a href="#" class="move-layout-module button does-not-work"><span>Move Layout Module</span></a><a href="#" class="delete-layout-module button"><span>Delete Layout Module</span></a></div><div class="image" style="background-image: url("assets/img/add-image-background.png");"><span class="to-remove">Drag an image here from the desktop <br>or <a href="#" class="click-to-add-image does-not-work">click here</a> to pick an image from your files.</span></div></div>';

  var headlineModule = '<div class="layout-module headline-module"><div class="move-and-delete-layout-module button-group"><a href="#" class="move-layout-module button does-not-work"><span>Move Layout Module</span></a><a href="#" class="delete-layout-module button"><span>Delete Layout Module</span></a></div><div class="headline text-node" contenteditable="true">Headline goes here.</div></div>';

  var subheadlineModule = '<div class="layout-module subheadline-module"><div class="move-and-delete-layout-module button-group"><a href="#" class="move-layout-module button does-not-work"><span>Move Layout Module</span></a><a href="#" class="delete-layout-module button"><span>Delete Layout Module</span></a></div><div class="subheadline text-node" contenteditable="true">Subheadline goes here.</div></div>';

  var paragraphModule = '<div class="layout-module paragraph-module"><div class="move-and-delete-layout-module button-group"><a href="#" class="move-layout-module button does-not-work"><span>Move Layout Module</span></a><a href="#" class="delete-layout-module button"><span>Delete Layout Module</span></a></div><div class="paragraph text-node" contenteditable="true">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div>';

  var moduleNotWorkingYet = '<div class="layout-module"><div class="move-and-delete-layout-module button-group"><a href="#" class="move-layout-module button does-not-work"><span>Move Layout Module</span></a><a href="#" class="delete-layout-module button"><span>Delete Layout Module</span></a></div><div style="color: red;">Sorry, this does not work yet.</div></div>';

  var addLayoutModuleButton = '<div class="add-layout-module"><a href="#" class="button add">Click to add layout module</a><div class="layout-options"><a href="#" class="holds-layout-module-to-add add-image-module first"><div class="layout-module-to-add"></div><span>Image<span></a><a href="#" class="holds-layout-module-to-add add-headline-module"><div class="layout-module-to-add"></div><span>Headline<span></a><a href="#" class="holds-layout-module-to-add add-subheadline-module"><div class="layout-module-to-add"></div><span>Subheadline<span></a><a href="#" class="holds-layout-module-to-add add-paragraph-module"><div class="layout-module-to-add"></div><span>Paragraph<span></a><a href="#" class="holds-layout-module-to-add add-favorites-module last"><div class="layout-module-to-add"></div><span>Favorites<span></a></div></div>';

  var editModuleTopBar = '<div class="edit-module-top-bar"><div class="explainer">Edit content:</div><div class="button-group confirm-edits"><a href="#" class="button save-as-favorite does-not-work">Save as Favorite</a><a href="#" class="button cancel-edit">Cancel Edit</a><a href="#" class="button confirm-edit">Confirm Edit</a></div></div>';

  var editModuleBottomBar = '<div class="edit-module-bottom-bar"><div class="layout-options"><div class="explainer">Choose a different module style for this content</div><a href="#" class="holds-layout-module-to-add add-image-module first does-not-work"><div class="layout-module-to-add"></div><span>Image<span></a><a href="#" class="holds-layout-module-to-add add-headline-module does-not-work"><div class="layout-module-to-add"></div><span>Headline<span></a><a href="#" class="holds-layout-module-to-add add-subheadline-module does-not-work"><div class="layout-module-to-add"></div><span>Subheadline<span></a><a href="#" class="holds-layout-module-to-add add-paragraph-module does-not-work"><div class="layout-module-to-add"></div><span>Paragraph<span></a><a href="#" class="holds-layout-module-to-add add-favorites-module last does-not-work"><div class="layout-module-to-add"></div><span>Favorites<span></a></div></div>';

  // Warn about non-functional links ============================================================= /
  $('body').on('mousedown', '.does-not-work', function(event) {
    event.preventDefault();
    $('.does-not-work-flash').fadeIn(100).delay(1000).fadeOut(400);
    $(this).removeClass('active');
  });

  // Show active item in button groups =========================================================== /
  $('.button-group').on('click', 'a', function(event) {
    event.preventDefault();
    $(this).addClass('active');
    $(this).parent().children('a').not(this).removeClass('active');
  });

  // Toggle mode and display ===================================================================== /
  $('#toggle-mode').on('click', '#layout-mode', function(event) {
    $('#toggle-display').removeClass('show').addClass('hide');
    $('#toggle-display a').removeClass('active');
    $('#desktop-display').addClass('active');
    $('#email-boundary').removeClass('phone-display').addClass('desktop-display');
    $('#email-boundary').removeClass('preview-mode').addClass('layout-mode');
  });
  $('#toggle-mode').on('click', '#preview-mode', function(event) {
    $('#toggle-display').removeClass('hide').addClass('show');
    $('#email-boundary').removeClass('layout-mode').addClass('preview-mode');
    $('.cancel').removeClass('cancel').addClass('add');
    $('.add-layout-module').removeClass('active');
    $('.text-node').removeAttr('contenteditable');
    $('.edit-module-top-bar').remove();
    $('.edit-module-bottom-bar').remove();
    $('.layout-module.active').removeClass('active');
  });

  $('#toggle-display').on('click', '#phone-display', function(event) {
    $('#email-boundary').removeClass('desktop-display').addClass('phone-display');
  });

  $('#toggle-display').on('click', '#desktop-display', function(event) {
    $('#email-boundary').removeClass('phone-display').addClass('desktop-display');
  });

  // Delete layout module ======================================================================== /
  $('#email-boundary').on('click', '.delete-layout-module', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).closest('.layout-module').next('.add-layout-module').fadeOut(400, function() { $(this).remove(); });
    $(this).closest('.layout-module').fadeOut(400, function() { $(this).remove(); });
  });

  // Add layout module =========================================================================== /
  $('#email-boundary').on('click', '.add', function(event) {
    event.preventDefault();
    $('.layout-module.active').children().remove('.edit-module-top-bar');
    $('.layout-module.active').children().remove('.edit-module-bottom-bar');
    $('.layout-module.active').removeClass('active');
    $('.text-node').removeAttr('contenteditable');
    $('.add-layout-module').removeClass('active');
    $('.cancel').removeClass('cancel').addClass('add');
    $(this).removeClass('add').addClass('cancel');
    $(this).closest('.add-layout-module').addClass('active');
  });
  $('#email-boundary').on('click', '.cancel', function(event) {
    event.preventDefault();
    $(this).removeClass('cancel').addClass('add');
    $(this).closest('.add-layout-module').removeClass('active');
  });

  $('#email-boundary').on('click', '.holds-layout-module-to-add', function(event) {
    event.preventDefault();
    var parentElement = $(this).closest('.add-layout-module');

    parentElement.before(addLayoutModuleButton);
    parentElement.after(addLayoutModuleButton);
    if ( $(this).hasClass('add-image-module') ) {
      parentElement.replaceWith(function() {
        return $(imageModule).fadeIn(400);
      });
    } else if ( $(this).hasClass('add-headline-module') ) {
      parentElement.replaceWith(function() {
        return $(headlineModule).fadeIn(400);
      });
    } else if ( $(this).hasClass('add-subheadline-module') ) {
      parentElement.replaceWith(function() {
        return $(subheadlineModule).fadeIn(400);
      });
    } else if ( $(this).hasClass('add-paragraph-module') ) {
      parentElement.replaceWith(function() {
        return $(paragraphModule).fadeIn(400);
      });
    } else {
      parentElement.replaceWith(function() {
        return $(moduleNotWorkingYet).fadeIn(400);
      });
    }
  });

  // Edit layout module ========================================================================== /
  $('#email-boundary').on('click', '.layout-module', function(event) {
    event.preventDefault();
    if ( !$(this).hasClass('active') ) {
      $('.add-layout-module .cancel').removeClass('cancel').addClass('add');
      $('.add-layout-module').removeClass('active');
      $('.text-node').removeAttr('contenteditable');
      if ( $('#email-boundary').hasClass('layout-mode') && !$(this).hasClass('active') ) {
        $('.layout-module.active').removeClass('active');
        $('.edit-module-top-bar').remove();
        $('.edit-module-bottom-bar').remove();
        $(this).addClass('active');
        $(this).prepend(editModuleTopBar);
        $(this).append(editModuleBottomBar);
        $(this).children('.text-node').attr('contenteditable', true);
      }
    }
  });
  $('body').on('click', '.cancel-edit, .confirm-edit', function(event) {
    event.preventDefault();
    var myParent = $(this).closest('.layout-module');

    myParent.children().remove('.edit-module-top-bar');
    myParent.children().remove('.edit-module-bottom-bar');
    myParent.children('.text-node').removeAttr('contenteditable');
    myParent.removeClass('active');
  });

}());