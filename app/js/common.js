$(function () {

    $(window).scroll(function () {

        const scrollTop = $(this).scrollTop();

        const yPos = (scrollTop / 0.1) / 100

        $('.paralax__vector-left').css({
            "transform": 'translate(' + yPos + '%, ' + scrollTop / 50 + '%)'
        })

        $('.paralax__vector-center').css({
            "transform": 'translate(' + -yPos + '%, ' + scrollTop / 160 + '%)'
        })

        $('.paralax__vector-right').css({
            "transform": 'translate(' + -yPos + '%, ' + scrollTop / 60 + '%)'
        })

        $('.paralax__girl').css({
            "transform": 'translate(0%, ' + scrollTop / 40 + '%)'
        })

    })

});

$( document ).ready( function() {
    $( "#arrow" ).click( function() {
        $('html, body').animate({
            scrollTop: $("section").offset().top
        }, 1000);
    });
})

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            extensions: ['fx-menu-slide', 'fx-panels-slide-up', 'fx-listitems-fade', 'pagedim-black', 'position-left',
                'theme-white', 'border-full'],
            navbar: {
                title: '<div class="company-text-header">Test</div>'
            }
        });
    }
);

const showInfoBlock = (mouseType, target) => {
    if (mouseType === 'mouseover') {
        return document.getElementById(target).style.opacity = '1'
    } else if (mouseType === 'mouseout') {
        return document.getElementById(target).style.opacity = '0'
    }
    return document.getElementById(target).style.opacity
}

document.getElementById('pulse').addEventListener('mouseover', e => showInfoBlock(e.type, 'blocks'))
document.getElementById('pulse').addEventListener('mouseout', e => showInfoBlock(e.type, 'blocks'))
document.getElementById('preview').addEventListener('mouseover', e => showInfoBlock(e.type, 'yanMap'))
document.getElementById('preview').addEventListener('mouseout', e => showInfoBlock(e.type, 'yanMap'))

const modal = document.getElementById("modal")
const modal2 = document.getElementById("modal-confirm")
const btnOnline = document.getElementById("btnOnline")
const btnFree = document.getElementById("btnFree")
const btnForm = document.getElementById("btnForm")
const span = document.getElementsByClassName("close")[0]
const span2 = document.getElementsByClassName("close2")[0]

btnOnline.onclick = (e) => {
    e.preventDefault()
    modal.style.display = "block"
}

btnFree.onclick = () => {
    modal.style.display = "block"
}

btnForm.onclick = () => {
    modal.style.display = "none"
    modal2.style.display = "block"
    setTimeout(() => {
        modal2.style.display = "none"
    }, 1000)
}

span.onclick = () => {
    modal.style.display = "none"
    modal2.style.display = "none"
}

span2.onclick = () => {
    modal2.style.display = "none"
}

window.onclick = e => {
    if (e.target == modal) {
        modal.style.display = "none"
        modal2.style.display = "none"
    }
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);

