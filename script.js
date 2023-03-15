var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for (var i = 0; i < navMenuAnchorTags.length; i++)
{
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        var interval = setInterval(function () {
        var targetSectionCoo = targetSection.getBoundingClientRect();

            if (targetSectionCoo.top <= 0)
            {   // target to top deistance becming lesser and lesser 
                clearInterval(interval);
                return;
                }
            window.scrollBy(0, 50);
        }, 60);

    });
}
