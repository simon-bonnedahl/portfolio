import React from "react";
import $ from "jquery";
import './Navbar.css'

const Navbar = () => {

    $(document).on('click', 'navbar .tabs ul.navbar-body li a', function(){
        var $this = $(this);
        TabHighlighter.set($this);
        $this.closest('li').siblings('.active').removeClass('active');
        $this.closest('li').addClass('active');
    });
    var TabHighlighter = {
        set: function($this){
            $('.tab-highlighter').css({
                'left':  $this.closest('li').offset().left,
                'width': $this.closest('li').outerWidth()
            });
        },
        refresh: function(){
            var $this = $('.tabs ul.navbar-body li.active a');
            $('.tab-highlighter').css({
                'left':  $this.closest('li').offset().left,
                'width': $this.closest('li').outerWidth()
            });
        }
    };
    $(window).resize(function(){
        TabHighlighter.refresh();
    });
    $(document).ready(function(){
      TabHighlighter.refresh();
    });
  
  
    return (
      <div id="test">
      <navbar>
        <div className="navbar tabs">
          <div className="container-fluid">
            <ul className="navbar-body list-inline">
              <li className="active"><a className="active">Home</a></li>
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
            <div className="tab-highlighter"></div>
          </div>
        </div>
      </navbar>
      </div>
    );
  
}

export default Navbar;