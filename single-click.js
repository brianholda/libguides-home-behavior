//to create a single click on libguides when there is only 1 guide under a subject

setTimeout(function() {
      if ($("#s-lg-index-list").length > 0) {
        $("#s-lg-index-cols")
          .find("div.panel.panel-default")
          .each(function() {
            var guides = $(this).find("ul.s-lg-guide-list > li");

            if (guides.length === 1) {
              var newLink = $(this)
                .find(".panel-collapse")
                .find("ul.s-lg-guide-list")
                .find("li")
                .find("a")
                .attr("href");

              // Remove the action elements in the heading
              $(this)
                .find(".panel-heading")
                .find("a")
                .removeAttr("data-toggle");

              // Switch out the href
              $(this)
                .find(".panel-heading")
                .find("a")
                .attr("href", newLink);
            } else {
              $(this)
                .find(".badge")
                .removeClass("badge")
                .html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
            } //end if
          });
      } //end if
    }, 1500); //end setTimeout
