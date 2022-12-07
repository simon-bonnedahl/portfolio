import React from "react";
import $ from "jquery";
import './Navbar.css'
import { act } from "react-dom/test-utils";

const Navbar = () => {
  
    var scrollAnimate = false

    $(document).on('click', '#tabs li a', function(){
        var $this = $(this);
        
        TabHighlighter.set($this);
      
        $this.closest('li').siblings('.active').removeClass('active');
        $this.closest('li').addClass('active');
         
        $('html, body').animate({
                    scrollTop: $($this.attr('href')).offset().top
                }, 500);

        scrollAnimate = true;
        setTimeout(() => {
          scrollAnimate = false;
        }, "500")
        
        return false;
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
            
            $('#tab-highlighter').css({
                'left':  $this.closest('li').offset().left,
                'width': $this.closest('li').outerWidth()
            });
        }
    };
    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    }

    window.onload = function () {
        TabHighlighter.refresh();
    }
    window.onresize = function () {
        TabHighlighter.refresh();
    }

    $(window).on('scroll', function() {
      if(!scrollAnimate){

      
        var pos = $(window).scrollTop();
        var pos2 = pos  + 50
    
        
        if (pos2 > $('#about').offset().top) {
          highlightLink('about');
          switchColorDark()
        }else{
          highlightLink('home');
          switchColorLight()
        }
        if (pos2 > $('#projects').offset().top) {
          highlightLink('projects');
          switchColorLight()
        }
        if (
          pos2 > $('#contact').offset().top ||
          pos + $(window).height() === $(document).height()
        ) {
          highlightLink('contact');
        }

      }
    });
  
    function highlightLink(anchor) {
      $('nav .active').removeClass('active');
      let tab =  $('#tabs li').find("a[href$=" + anchor + "]")
      tab.closest('li').addClass('active');
      TabHighlighter.set(tab);
    }
    function switchColorDark() {
      let tabs = $('#tabs li')
      tabs.each(function(idx, li) {
         $(li).children('a').removeClass('light'); 
         $(li).children('a').addClass('dark');
          
    });
    }
    function switchColorLight() {
      let tabs = $('#tabs li')
      tabs.each(function(idx, li) {
         $(li).children('a').removeClass('dark'); 
         $(li).children('a').addClass('light');
          
    });
        
          
    }
  
  
    return (
      <nav>
          <div id="tabs">
            <ul>
              <li className="active"><a  className="light" href="#home">Home</a></li>
              <li>                   <a  className="light" href="#about">About</a></li>
              <li>                   <a  className="light" href="#projects">Projects</a></li>
              <li>                   <a  className="light" href="#contact">Contact</a></li>
            </ul>
            <div id="tab-highlighter"></div>
          </div>
      </nav>

    );
  
}

export default Navbar;