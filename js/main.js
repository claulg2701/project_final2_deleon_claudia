function loadMenu() {
    var myMenu = document.getElementById( 'nav-links' );
    var openCloseMenu = document.getElementById( 'menu-icon' );
    var logo = document.getElementById( 'logo' );

    if ( myMenu.className == 'open' ) {
      myMenu.className = 'close';
      myMenu.style.transform = 'translateY(-350px)';
      myMenu.style.transition = 'transform 0.3s ease';
      openCloseMenu.className = 'fa fa-bars';
      myMenu.style.zIndex = '0';
      logo.style.visibility = 'visible';
    } else {
      myMenu.className = 'open';
      openCloseMenu.className = 'fa fa-times';
      myMenu.style.transform = 'translateY(-100px)';
      myMenu.style.transition = 'transform 0.3s ease';
      myMenu.style.zIndex = '1';
      logo.style.visibility = 'hidden';
    }
}

window.onresize = function() {
    var mq = window.matchMedia( '(min-width: 1024px)' );
    var myMenu = document.getElementById( 'nav-links' );
    var logo = document.getElementById( 'logo' );
    var openCloseMenu = document.getElementById( 'menu-icon' );

    if ( !mq.matches )
    {
        myMenu.style.zIndex = '0';
        openCloseMenu.className = 'fa fa-bars';
        logo.style.visibility = 'visible';
        if ( myMenu.className === 'open' ) {
            myMenu.style.transform = 'translateY(-351px)';
            myMenu.className = 'close';
        }
        if ( myMenu.className === 'close' ) {
            myMenu.style.transform = 'translateY(-350px)';
        }
    }
    if ( mq.matches ) {
        myMenu.style.transform = 'translateY(0)';
        myMenu.style.transition = 'none';
    }
};
