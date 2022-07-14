//LĂN ĐỂ ĐỔI THANH NAVBAR
var headerTop = document.querySelector(".header-top");
var navBarSearch = document.querySelector(".navbar-search");
var navBarSmallSearch = document.querySelector(".navbar-s-search");
var overlay = document.querySelector(".header-search-overlay");
var logIn = document.querySelector("register__btn--primary");

// Khi cuộn thì chạy func
window.addEventListener('scroll',stickyHeader);
// Gán vị trí của header-top so vs header
var sticky = headerTop.offsetTop;
// Hàm thêm bớt class sticky khi scroll
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        headerTop.classList.add("sticky");
        navBarSearch.classList.add("nav-scale");
    } else {
        headerTop.classList.remove("sticky");
        navBarSearch.classList.remove("nav-scale");
        navBarSmallSearch.classList.remove("navbar-s-search--close");
        navBarSearch.classList.remove("navbar-search--open");
        headerTop.classList.remove("header-top--open");
        overlay.classList.remove("overlay--open")
    }
}

//LĂN ĐỂ HIỆN NAVBAR TRÊN MOBILE
var navBarMobile = document.querySelector(".navbar-mobile");
var lastScrollTop = 0;
window.addEventListener('scroll',hideNavBarMobile);
function hideNavBarMobile() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > lastScrollTop) {
        navBarMobile.classList.add('navbar-mobile-hide');
    } else {
        navBarMobile.classList.remove('navbar-mobile-hide');
    }
    lastScrollTop = scrollTop;
}

// CLICK VÀO NAVBAR NHỎ ĐỂ ẨN HIỆN SEARCHBAR
navBarSmallSearch.addEventListener('click',showSearchBar);
overlay.addEventListener('click', hideSearchBar);
// Show search bar
function showSearchBar() {
    navBarSmallSearch.classList.add("navbar-s-search--close");
    navBarSearch.classList.add("navbar-search--open");
    headerTop.classList.add("header-top--open");
    overlay.classList.add("overlay--open");
}
// Hide search bar
function hideSearchBar() {
    navBarSmallSearch.classList.remove("navbar-s-search--close");
    navBarSearch.classList.remove("navbar-search--open");
    headerTop.classList.remove("header-top--open");
    overlay.classList.remove("overlay--open");
}

// NÚT NEXT - PREV KHI Ở THIẾT BỊ TABLET
var arrowNext = document.querySelector(".arrow-next-btn");
var arrowBack = document.querySelector(".arrow-back-btn");
var anywhereItems = document.querySelectorAll(".js-anywhere__item");
var anywhereItemWidth = document.querySelector(".js-anywhere__item").offsetWidth;
var click = 0;

arrowNext.addEventListener('click', function() {
    click++;
    for (var anywhereItem of anywhereItems) {
        if (click==1) {
            anywhereItem.style.left = "-" + anywhereItemWidth + "px";
            arrowBack.classList.remove('arrow-btn-item--disable');
            arrowNext.classList.add('arrow-btn-item--disable');
        }
    }
})
arrowBack.addEventListener('click', function() {
    click--;
    for (var anywhereItem of anywhereItems) {
        if (click==0) {
            anywhereItem.style.left = "0px";
            arrowBack.classList.add('arrow-btn-item--disable');
            arrowNext.classList.remove('arrow-btn-item--disable');
        }
    }
})

// ẨN HIỆN THANH SEARCHBARCHILD KHI CLICK
const searchBarItems = document.querySelectorAll(".search-bar-item");
const searchBarList = document.querySelector(".search-bar");
const searchBarItemChilds = document.querySelectorAll(".search-bar-item-child");
const searchBtn = document.querySelector(".search-bar-btn");

var active;
for (const searchBarItem of searchBarItems) {
    searchBarItem.addEventListener('click', function(evt) {
        searchBarList.classList.add('search-bar--active');
        searchBtn.classList.add('search-bar-btn--active');
        // Nếu đối tượng click đã có class active rồi thì khi click xóa active
        if (this.classList.contains('search-bar-item--active')) {
            this.classList.remove('search-bar-item--active');
        } else {
        // Ngược lại kiểm tra trước đó có item nào có class active chưa, nếu có thì xóa
            if (active) active.classList.remove('search-bar-item--active');
        // Sau đó thêm class active vào item đã click
            this.classList.add('search-bar-item--active');
        // Nạp lại đối tượng vừa active vào biến
            active = evt.currentTarget;
        }
    })
}

// Sự kiện nổi bọt. Ngăn không cho click vào thằng searchBarChild thì đóng thằng cha
for (const searchBarItemChild of searchBarItemChilds) {
    searchBarItemChild.addEventListener('click', function(event) {
        event.stopPropagation()
    })
}
// Sự kiện nổi bọt. Ngăn không cho click vào thằng form thì đóng thằng cha
var formSearch = document.querySelector('.form-search')
formSearch.addEventListener('click', function(event) {
    event.stopPropagation()
})

// nghe sự kiện click toàn trang (class wrapper bao toàn bộ nội dung trang)
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener('click', function(evt) {
        let outSiteSearchBar = true;
        // evt.path chứa danh sách thẻ từ nhỏ tới lớn của cái click này (ví dụ click cái nút, thì nó chứa danh sách cái nút, cái div chưa cái nút, cái section chứ cái div...)
        for (const elms of evt.path){
            // vì danh sách elms trong path còn chứa 2 item không sử dụng (document, windows), nên dạng của nó là undefined. Phải chặn nó lại để khỏi lỗi code
            if (typeof elms.classList == 'undefined') break;
            // tìm trong danh sách evt.path xem có chứa thằng search bar không (nó là thẻ tổng bao lại những thằng cần bấm vào nhưng ko ẩn mấy cái tab)
            if (elms.classList.contains('search-bar')) outSiteSearchBar = false;
        }
        // nếu click này nằm ngoài search bar thì xóa active đi
        if (outSiteSearchBar) {
            for (const searchBarItem of searchBarItems) {
                searchBarItem.classList.remove('search-bar-item--active');
                searchBarList.classList.remove('search-bar--active');
            }
            searchBtn.classList.remove('search-bar-btn--active');
        }
    });

// TAB CALENDAR TRONG THANH SEARCH / Xem lại trong tab UI khóa HTML,CSS Tricks
const $$ = document.querySelector.bind(document)
const $$$ = document.querySelectorAll.bind(document)

const checkInTabItems = $$$('.js-checkin-tab-item')
const checkInTabPanes = $$$('.js-checkin-tab-pane')



checkInTabItems.forEach((tab,index) => {
    //Lấy index của tab tương ứng với content
    const checkInTabPane = checkInTabPanes[index]
    tab.onclick = function () {
        
        //Tìm item active rồi thì xóa đi
        const checkInTabItemActive = $$('.js-checkin-tab-item.checkin-tab-item--active')
        
        checkInTabItemActive.classList.remove('checkin-tab-item--active') 
        //Tìm pane active rồi thì xóa đi
        const checkInTabPaneActive = $$('.js-checkin-tab-pane.checkin-tab-pane--active')
        checkInTabPaneActive.classList.remove('checkin-tab-pane--active')
        //calendar
        
        //Thêm class active vào item vừa click
        this.classList.add('checkin-tab-item--active')
        //Thêm class active vào content tương ứng tab click
        checkInTabPane.classList.add('checkin-tab-pane--active')
        
        
    }
})

const checkOutTabItems = $$$('.js-checkout-tab-item')
const checkOutTabPanes = $$$('.js-checkout-tab-pane')

checkOutTabItems.forEach((tab,index) => {
    //Lấy index của tab tương ứng với content
    const checkOutTabPane = checkOutTabPanes[index]

    tab.onclick = function () {
        //Tìm item active rồi thì xóa đi
        const checkOutTabItemActive = $$('.js-checkout-tab-item.checkout-tab-item--active')
        checkOutTabItemActive.classList.remove('checkout-tab-item--active')
        //Tìm pane active rồi thì xóa đi
        const checkOutTabPaneActive = $$('.js-checkout-tab-pane.checkout-tab-pane--active')
        checkOutTabPaneActive.classList.remove('checkout-tab-pane--active')
        //Thêm class active vào item vừa click
        this.classList.add('checkout-tab-item--active')
        //Thêm class active vào content tương ứng tab click
        checkOutTabPane.classList.add('checkout-tab-pane--active')
    }
})

const dayTabItems = $$$('.js-day-tab-item')
const dayTabPanes = $$$('.js-day-tab-pane')

dayTabItems.forEach((tab,index) => {
    //Lấy index của tab tương ứng với content
    const dayTabPane = dayTabPanes[index]

    tab.onclick = function () {
        //Tìm item active rồi thì xóa đi
        const dayTabItemActive = $$('.js-day-tab-item.day-tab-item--active')
        dayTabItemActive.classList.remove('day-tab-item--active')
        //Tìm pane active rồi thì xóa đi
        const dayTabPaneActive = $$('.js-day-tab-pane.day-tab-pane--active')
        dayTabPaneActive.classList.remove('day-tab-pane--active')
        //Thêm class active vào item vừa click
        this.classList.add('day-tab-item--active')
        //Thêm class active vào content tương ứng tab click
        dayTabPane.classList.add('day-tab-pane--active')
    }
})
