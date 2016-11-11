


First jQuery-Enabled File

    /*<script type="text/javascript" src="../jquery-1.11.1.js"></script>

    <script type="text/javascript">
        $("document").ready(function() {
            $("body").append("<p>The page just loaded!</p>");
        });
    </script>*/

        window.addEventListener("DOMContentLoaded", function(evt) {
            var elem = document.getElementsByTagName("body")[0];
            var para = document.createElement("p");
            var text = document.createTextNode("The page just loaded!");
            para.appendChild(text);
            elem.appendChild(para);
        });

------------------------
Basic Selectors

            $("p").css("border", "3px solid red");
            $(".a").css("border", "3px solid red");
            $("#example").css("border", "3px solid red");
            $("p.b").css("border", "3px solid red");

Basic Filters

            $("#example p:first").css("border", "3px solid red");
            $("#example p:last").css("border", "3px solid red");
            $("#example p:even").css("border", "3px solid red");
            $("#example p:odd").css("border", "3px solid red");
            $("#example .a:first").css("border", "3px solid red");
            $("#example .b:even").css("border", "3px solid red");
            $("#example p:gt(1)").css("border","3px solid red");
            $("#example p:not(p:eq(2))").css("border", "3px solid red");


Advanced Selectors

        // The child selector "parent > child" selects "child" elements
        // that are immediate descendants of the "parent"
        $("div > p").css("border", "3px solid red");
        
        // The descendant selector "ancestor descendant" selects "descendant" 
        // elements as long as they have an "ancestor" element somewhere
        // above them
        $("div p.a").css("border", "3px solid red");
        
        // The next adjacent selector "prev + next" selects the "next" 
        // element if it is immediately preceded by a "prev" element
        $("ul + div").css("border", "3px solid red");
        
        // Next sibling selector "prev ~ siblings" selects all "siblings" 
        // elements that come after a "prev" element
        $("#para1 ~ p").css("border", "3px solid red");


Advanced Filters

            $("p[class]").css("border", "3px solid red");
            $("p[id=para1]").css("border", "3px solid red");
            $("p[id^=para]").css("border", "3px solid red");
            $("p[id^=para][lang*=en-]").css("border", "3px solid red");


            $("p:contains('3')").css("border", "3px solid red");
            $("p:parent").css("border", "3px solid red");
            $("div:has(p[class=a])").css("border", "3px solid red");
            
            $("div p:first-child").css("border", "3px solid red");
            $("div p:last-of-type").css("border", "3px solid red");
            $("div p:nth-child(3)").css("border", "3px solid red");
            $("div p:nth-child(2n)").css("border", "3px solid red");


Traversing:

            // The children() function retrieves the immediate (that is, 
            // first-level down) child elements of the matched set, 
            // excluding text nodes.
            $("#example").children().css("border", "3px solid red");

            var elem = $("#para1");
            elem.prev().css("border", "3px solid red");
            elem.next().css("border", "3px solid green");
            elem.parents().css("border", "3px solid blue");
            
            elem.parentsUntil($("body")).css("border", "3px solid blue");
            
            // use the find function to locate content within 
            // particular elements
            $("#example").find("#para4").css("border", "3px solid red");

            // use the each function to iterate over a set of 
            // elements and operate on them
            var leftmargin = 0;
            var border = 3;
            $("#example p").each(function(index, element) {
                $(element).css("border", border+"px solid red")
                          .css("margin-left", leftmargin);
                border += 2;
                leftmargin += 10;
            });

------------------------
Creating Content

            // use the html() function to get the current HTML of an element
            //alert($("#example").html());


        function createContent() {
            // use the html() function to change the content of the div
            $("#example").html("<p>Hi there!</p>");
            
            // create a new <p> and set the content of para1 to it
            var newItem = $("<p>This is a new paragraph</p>");
            $("#para1").html(newItem);
        }
        
        function changeContent() {
            // set the text content of the last paragraph
            $("p:last").text("I've changed the last paragraph");
        }
        
        function changeAllTheContent() {
            $("#example p").text("I've changed all the paragraphs!");
        }


Inserting Content

            // Insertion functions for inserting inside of content
            $("#example p").append(" with some content appended");
            $("#example p").prepend("Hello! ");
            $("#example p:last").appendTo("#example p:first");
            $("#example p:last").prependTo("#example p:first");
            
            // Insertion functions for inserting outside of content
            $("#example p").after("**");
            $("#example p").before("**");
            $("<p>New Para</p>").insertAfter("#example p:first");
            $("<p>New Para</p>").insertBefore("#example p:last");


Altering Content

        $("#example p").wrap("<div style='color:red'/>");
        $("#example p").wrapAll("<div style='border:3px solid red'/>");
        $("#example").empty();
        $("#example p.a, #example p.b").remove();
        $("#example p.a, #example p.b").detach();
        $("<div>replaced</div>").replaceAll("#example p[id]");
        $("#example p[id]").replaceWith("<div>replaced</div>");
        $("#example p").replaceWith(replacementFn);

    
    function replacementFn() {
        if ($(this).text().indexOf("1") != -1) {
            return "<p>This is paragraph uno</p>";
        }
    }


Manipulating Attributes

            // Add a title attribute to all of the images
            $("a").attr("title", "Photo by some photographer");

            // Make each image open in a new window
            $("a").attr("target", "_blank");

            // Remove the href from the <a> tags, making images unclickable
            $("a").removeAttr("href");

            // Modify multiple attributes at once
            $("img").attr({ src: "images/Spring.jpg", title: "Spring all the things!" });

Embedding Data

                // if there is any data, display it
                alert(JSON.stringify($("#example").data(), null, "  "));


                // store some arbitrary data on the DIV object
                $("#example").data("key1", 1234);
                $("#example").data("key2", "Joe Marini");


                // clear the data from the DIV
                $("#example").removeData();

CSS

            $("#setProp").click(function(evt) {
                $("#example p").css("text-decoration", "overline")
                                .css("font-size", "+=1pt");
            });

            $("#setProps").click(function(evt) {
                $("#example p").css({
                    "font-weight" : "bold",
                    "color" : "red",
                    "text-decoration" : "underline"
                });
            });

            $("#addCl").click(function(evt) {
                $("#example p").addClass("pClass");
            });

            $("#rmCl").click(function(evt) {
                $("#example p").removeClass("pClass");
            });

            $("#toggleCl").click(function(evt) {
                $("#example p").toggleClass("pClass");
            });

        .pClass {
            color: green;
            text-transform: uppercase
        }
        
        $(function() {
            showValues();
            
            $("#example").click(changeValues);
        });
        
        function changeValues() {
            $("#example").height(100);
            $("#example").width(200);
            
            showValues();
        }
        
        function showValues() {
            $("#height").html($("#example").height());
            $("#width").html($("#example").width());
            $("#innerH").html($("#example").innerHeight());
            $("#innerW").html($("#example").innerWidth());
            $("#outerH").html($("#example").outerHeight());
            $("#outerW").html($("#example").outerWidth());
            $("#offset").html($("#example").offset().top + ", " + 
                            $("#example").offset().left);
            $("#position").html($("#example").position().top + ", " + 
                                $("#example").position().left);
        }


------------------------
Binding and Unbinding Events

            $("#evtTarget").on("mouseover mouseleave", highlight);
            $("#evtTarget").on("click", function(evt) {
                $("#evtTarget").off("mouseover mouseleave", highlight);
                $("#evtTarget").html("<p>You shut off the hover effect!</p>");
                $("#evtTarget").removeClass("highlighted");
            });
            
            $("#textEntry").on("keypress", function(evt) {
                $("#keyPress").text(String.fromCharCode(evt.charCode));
            });


        function highlight(evt) {
            $("#evtTarget").toggleClass("highlighted");        
        }


    <p>Type in this text field</p>
    <input id="textEntry" type="text"/>
    <p>Last character typed: <span id="keyPress"></span></p>

------------------------
Event Helpers

            $("#evtTarget").hover(highlight, highlight);

            $("#evtTarget").click(fnClick1);
            $("#evtTarget").dblclick(fnClick2);
            
            $(window).resize(fnResize);


        function highlight(evt) {
            $("#evtTarget").toggleClass("highlighted");
        }
        function fnClick1() {
            $("#evtTarget").html("Click");
        }
        function fnClick2() {
            $("#evtTarget").html("Double Click");
        }
        function fnResize() {
            $("#evtTarget").html("Browser window resized");
        }

------------------------
The Event Object

            $("#Div1").on("click dblclick", { name: "Div 1" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#Div2").on("click dblclick", { name: "Div 2" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("#Div3").on("click dblclick", { name: "Div 3" }, function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mouseenter", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mouseleave", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            $("div.smallbox").on("mousemove", function(evt) {
                updateEventDetails(evt);
                evt.stopPropagation();
            });
            
            $("#input1").keypress(updateEventDetails);


        function updateEventDetails(evt) {
            // clear any current text before we update the value fields
            $(".detailLine span[id]").text("");
            
            $("#evtType").text(evt.type);
            $("#evtWhich").text(evt.which);
            $("#evtTarget").text(evt.target.id);
            if (evt.relatedTarget)
                $("#evtRelated").text(evt.relatedTarget.tagName);
            $("#evtPageX").text(evt.pageX);
            $("#evtPageY").text(evt.pageY);
            $("#evtClientX").text(evt.clientX);
            $("#evtClientY").text(evt.clientY);
            $("#evtMetaKey").text(evt.metaKey);
            if (evt.data)
                $("#evtData").text(evt.data.name);
        }

------------------------
Showing and Hiding Elements

            $("#show").click(function() {
                $("#theDiv").show("fast");
            });
            $("#hide").click(function() {
                $("#theDiv").hide(1000, "swing");
            });
            $("#toggle").click(function() {
                $("#theDiv").toggle("slow", completion);
            });


        function completion() {
            // the value of this is set to the DOM element being affected
            $(this).text("Animation complete");
        }

------------------------
Fade Effects

            $("#fadein").click(function() {
                $("#theDiv").fadeIn("normal");
            });
            $("#fadeout").click(function() {
                $("#theDiv").fadeOut("normal");
            });
            $("#fadeto3").click(function() {
                $("#theDiv").fadeTo("slow", 0.3);
            });
            $("#fadeup").click(function() {
                $("#theDiv").fadeTo("slow", 1.0);
            });
            $("#pulse").click(function() {
                $("#theDiv").fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0)
                            .fadeTo("fast", 0.3)
                            .fadeTo("fast", 1.0);
            });


        function onComplete() {
            $(this).text("Fading effect complete");
        }

------------------------
Sliding Elements

            $("#slideup").click(function() {
                $("#theDiv").slideUp(1000);
            });
            $("#slidedown").click(function() {
                $("#theDiv").slideDown("fast", "swing");
            });
            $("#toggle").click(function() {
                $("#theDiv").slideToggle("slow", onToggleFinished);
            });

        function onToggleFinished() {
            // the value of this is set to the DOM element being animated
            console.log ("slideToggle complete on: " + this.id);
        }

------------------------
Custom Animations

            $("#right").click(function() {
                $("#theDiv").animate({ width: "500px" }, 1000);
            });
            $("#text").click(function() {
                $("#theDiv").animate({ fontSize: "24pt" }, 1000);
            });
            $("#move").click(function() {
                $("#theDiv").animate({ left: "500" }, 1000, "swing");
            });
            $("#all").click(function() {
                $("#theDiv").animate({ left: "500", fontSize: "24pt", width: "500px" }, 1000, "swing");
            });


------------------------
Basic AJAX:

        $.ajax({
          // the URL for the request
          url: "testdata.txt",

          // whether this is a POST or GET request
          type: "GET",
         
          // the type of data we expect back
          dataType : "text",
          
          // function to call for success
          success: successFn,

          // function to call on an error
          error: errorFn,
                           
          // code to run regardless of success or failure
          complete: function( xhr, status ) {
            console.log("The request is complete!");
          }
        });

------------------------
AJAX Helpers:

      	$.get("testdata.txt", successFn);
      	
        //$("#content").load("testdata.txt");
        //$("#content").load("testdata.html #p2");

------------------------
AJAX With Data Types:

		$.getJSON( flickrAPI, {
			tags: "space needle",
			tagmode: "any",
			format: "json"
			},
			successFn);

      	$.get("testxmldata.xml", function(result) {
      		var title = result.getElementsByTagName("title")[0];
      		var name = result.getElementsByTagName("name")[0];
      		var val = title.firstChild.nodeValue + " by " + name.firstChild.nodeValue;
      		$("#content").append(val);
      	});

		$.each(result.items, function(i, item) {
			$("<img>").attr("src", item.media.m).appendTo("#content");
			if (i === 4) {
				return false;
			}
		});

------------------------

AJAX Globals:

        $(document).ajaxStart(function () {
          console.log("AJAX starting");
        });

        $(document).ajaxStop(function () {
          console.log("AJAX request ended");
        });

        $(document).ajaxSend(function (evt, jqXHR, options) {
          console.log("About to request data...");
        });

        $(document).ajaxComplete(function (evt, jqXHR, options) {
          console.log("Everything's finished!");
        });

        $(document).ajaxError(function (evt, jqXHR, settings, err) {
          console.log("Hmmm. Seems like there was a problem: " + err);
        });

        $(document).ajaxSuccess(function (evt, jqXHR, options) {
          console.log("Looks like everything worked!");
        });


