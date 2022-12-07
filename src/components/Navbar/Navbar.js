import React from "react";
import $ from "jquery";
import './Navbar.css'

const Navbar = () => {

    $(document).on('click', '#tabs li a', function(){
        var $this = $(this);
        
        TabHighlighter.set($this);
      
        $this.closest('li').siblings('.active').removeClass('active');
        $this.closest('li').addClass('active');
        $('html, body').animate({
                    scrollTop: $($this.attr('href')).offset().top
                }, 500);
    });
    var TabHighlighter = {
        set: function($this){
            $('#tab-highlighter').css({
                'left':  $this.closest('li').offset().left,
                'width': $this.closest('li').outerWidth()
            });
        },
        refresh: function(){      //Set the highlighter to the correct active tab
            var $this = $('.active');
            console.log("🚀 ~ file: Navbar.js:24 ~ Navbar ~ $this", $this)
            
            $('#tab-highlighter').css({
                'left':  $this.closest('li').offset().left,
                'width': $this.closest('li').outerWidth()
            });
        }
    };
    
    window.onload = function () {
    TabHighlighter.refresh();
    };
    $(window).resize(function(){
        TabHighlighter.refresh();
    });
    $(document).ready(function(){
      TabHighlighter.refresh();
    });
  
  
    return (
      <nav>
          <div id="tabs">
            <ul>
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div id="tab-highlighter"></div>
          </div>
      </nav>

    );
  
}

export default Navbar;