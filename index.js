

function BodyStyles() {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
document.body.style.overscrollBehaviorX="none"
    document.body.style.boxSizing = 'border-box';
    document.body.style.fontFamily = 'Open Sans, sans-serif';
}

function createNav() {
    const nav = document.createElement('div');
    nav.style.backgroundColor = "rgb(255, 255, 255)";
    nav.style.height = "70px";
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.position = "relative"

    nav.style.padding = "0 60px";
    nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    const logo = document.createElement("img")
    logo.src = "./images/logo.png"
    const navlist = document.createElement("ul");
    navlist.style.listStyle = "none"
    navlist.style.alignItems = "center"
    navlist.style.display = "flex";

    const links = ['Home', 'About', 'Pages', 'Contact']

    links.forEach(linkText => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = "0px"
        const link = document.createElement('a');
        link.innerText = linkText;
        link.style.fontSize = "16px"
        link.style.color = "black";
        link.style.textDecoration = "none";
        link.style.marginLeft = "20px";
        link.style.cursor = "pointer";
        listItem.appendChild(link);
        navlist.appendChild(listItem);
    });

    nav.appendChild(logo)
    nav.appendChild(navlist)

    const menu = document.createElement("div")
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`
    nav.appendChild(menu)


    function ResponsiveNav() {
        if (window.innerWidth < 768) {

            navlist.style.flexDirection = 'column';
            navlist.style.width = "100%"
            navlist.style.position = "absolute"
            navlist.style.left = "0"
            navlist.style.top = "70px"

            navlist.style.gap = "2rem"
            navlist.style.zIndex = "100"
            navlist.style.padding = "40px 0"
            navlist.style.background = "rgb(255, 255, 255)"

            menu.style.display = 'block';
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = 'row';
            nav.style.justifyContent = "space-between";
            navlist.style.flexDirection = 'row';
            navlist.style.position = "relative"
            navlist.style.top = "0px"
            navlist.style.gap = "2rem"
            navlist.style.zIndex = "100"
            navlist.style.padding = "0px 0"
            nav.style.height = "70px";
            navlist.style.width = "fit-content"
            menu.style.display = 'block';
            menu.style.display = 'none';        
        }
    }

    menu.addEventListener('click', () => {
        if (navlist.style.display === 'none') {
            navlist.style.display = 'flex';
            navlist.style.flexDirection = 'column';
        } else {
            navlist.style.display = 'none';
        }
    });

    window.addEventListener('resize', ResponsiveNav);
    ResponsiveNav();
    // document.addEventListener('DOMContentLoaded', applyResponsiveStyles); 


    return nav;
}
// --------------------------------------------section one---------------------------------------

function Section1() {
    const Section1 = document.createElement('section');
    const container = document.createElement('div');
    container.style.width="100%"
    container.style.display="flex"
    container.style.justifyContent="center"
    container.style.gap="3rem"


    Section1.style.background = "linear-gradient(45deg,hsl(215, 73%, 52%),hsl(218, 96%, 18%)";

    Section1.style.height = "100vh";
    Section1.style.display = "flex"
    Section1.style.flexDirection="column"
    Section1.style.alignItems="center"
    Section1.style.gap = "4rem"
    Section1.style.padding = "90px 60px"


    const mainImg = document.createElement("img")
    mainImg.src = "./images/mobile (1).png"
    mainImg.style.width = "400px"
    mainImg.style.height = "500px"

    let content = document.createElement('div');
    content.style.color = "white"
    content.style.width = "50%"
    content.style.height = "400px"
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.padding = " 40px 10px"
  

    const h1 = document.createElement("h1");
    h1.style.fontSize = "50px"
    h1.innerText = "Showcase your app with Small Apps";
    const p = document.createElement("p");
    p.style.fontSize = "16px"
    p.style.lineHeight = "25px"

    p.innerText = "Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App."
    const button = document.createElement("button")
    button.innerText = "DOWNLOAD NOW"
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "hsl(215, 84%, 56%)";
    button.style.color = "white";
    button.style.width = "200px"
    button.style.height = "60px"
    button.style.fontSize = "18px"
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.marginTop = "20px";

    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = "hsl(227, 87%, 59%)";
    });

    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = "hsl(215, 84%, 56%)";
    });
    content.appendChild(h1)
    content.appendChild(p)
    content.appendChild(button)


    container.appendChild(content)
    container.appendChild(mainImg)

    const features = document.createElement("div");
    features.style.display = "flex";

    features.style.width = "100%";
    features.style.borderRadius = "10px";
    features.style.marginTop = "5rem"
    features.style.padding = "30px 20px"
    features.style.background = "white"
    features.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";


    let featuresContent = [
        { src: "./images/colors_24.png", title: "Themes Made Easy", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
        { src: "./images/clear_day_24.png", title: "Powerful Design", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
        { src: "./images/cloud_24.png", title: "Creative Content", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
    ];

    featuresContent.forEach(obj => {
        const feature = document.createElement("div");
        feature.style.display = "flex";
        feature.style.alignItems = "center"
        feature.style.textAlign = "center"
        feature.style.flexDirection = "column";
        feature.style.padding = "10px";
        feature.style.background = "white";
        const icon = document.createElement("img");
        icon.src = obj.src;
        icon.style.width = "50px"
        const title = document.createElement("h4");
        title.innerText = obj.title;
        const featureContent = document.createElement("p");
        featureContent.innerText = obj.content;
        featureContent.style.color = "hsl(195, 2%, 64%)"
        feature.appendChild(icon);
        feature.appendChild(title);
        feature.appendChild(featureContent);
        features.appendChild(feature);
    });


    Section1.appendChild(container);
    Section1.appendChild(features);



    // ----------------------------------------------responsive style------------------------------------------
    function ResponsiveSection1() {
        if (window.innerWidth < 768) {
            Section1.style.height = "100%";

            Section1.style.justifyContent = "center"
            container.style.width="100%"
            container.style.display="flex"
            container.style.flexDirection="column"
            container.style.alignItems="center"
            container.style.justifyContent="center"
            container.style.gap="3rem"
        
            features.style.marginTop = "0px"
            h1.style.fontSize = "50px"

            content.style.width = "100%";
            content.style.order = "2"
            content.style.justifyContent = "center"
            content.style.alignItems = "center"
            content.style.textAlign = "center"
            mainImg.style.width = "70%";
            mainImg.style.height = "auto";
            mainImg.style.order = "1"
            features.style.flexDirection = "column";
            features.style.order = "3"
            features.querySelectorAll('.feature').forEach(feature => {
                feature.style.width = "100%";
            });
        } else if (window.innerWidth < 400) {
            features.style.marginTop = "0px"
            content.style.width = "100%";
            content.style.order = "2"
            mainImg.style.width = "70%";
            mainImg.style.height = "auto";
            mainImg.style.order = "1"
            features.style.flexDirection = "column";
            features.style.order = "3"

            features.querySelectorAll('.feature').forEach(feature => {
                feature.style.width = "100%";
            });
        } else {
            Section1.style.background = "linear-gradient(45deg,hsl(215, 73%, 52%),hsl(218, 96%, 18%)";

            Section1.style.height = "100%";
            Section1.style.display = "flex"
            Section1.style.gap = "4rem"
            Section1.style.padding = "90px 60px"
            mainImg.style.width = "400px"
            mainImg.style.height = "500px"
            features.style.order = "3"

        }
    }

    window.addEventListener('resize',  ResponsiveSection1);
    ResponsiveSection1();
    return Section1;

}
// -----------------------------------------------section2-------------------------------------
function section2() {
    const section2 = document.createElement('section');
    let content = document.createElement('div');
    // content.style.width = "50%"
    content.style.height = "400px"
    content.style.display = "flex"
    content.style.flexDirection = "column"
    content.style.padding = " 40px 0px"

    const h1 = document.createElement("h1");
    h1.style.fontSize = "45px"
    h1.style.fontWeight = "20"

    h1.innerText = "Increase your productivity with Small Apps";
    const p = document.createElement("p");
    p.style.fontSize = "16px"
    p.style.lineHeight = "26px"
    p.innerText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    p.style.color = "hsl(195, 2%, 64%)"

    const p2 = document.createElement("p");
    p2.style.fontSize = "18px"
    p2.style.fontFamily = "Lora, serif,italic";
    p2.style.fontStyle = "italic";



    p2.innerText = "InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."

    const test = document.createElement("div");
    const person = document.createElement("img");

    person.src = "./images/feature-testimonial-thumb.jpg"
    const name = document.createElement("span");
    name.innerText = " Jonathon Andrew , Themefisher.com"
    name.style.color = "hsl(195, 2%, 64%)"
    name.style.marginLeft = "15px"
    test.appendChild(person)
    test.appendChild(name)
    test.style.display = "flex"

    content.appendChild(h1)
    content.appendChild(p)
    content.appendChild(p2)
    content.appendChild(test)



    const mainImg = document.createElement("img")
    mainImg.src = "./images/feature-new-01.jpg"
    mainImg.style.width = "60%"
    mainImg.style.height = "600px"


    section2.appendChild(mainImg);

    section2.appendChild(content);

    section2.style.background = "white";

    section2.style.height = "100%";
    section2.style.display = "flex"

    section2.style.padding = "90px 60px"


    function ResponsiveSection2() {
        if (window.innerWidth < 768) {
            section2.style.height = "100%";
            section2.style.gap = "1rem"
            section2.style.flexDirection = "column";
            content.style.height = "100%"
            content.style.width = "100%";

            mainImg.style.width = "100%";
            mainImg.style.height = "auto";

        } else if (window.innerWidth < 900) {
            content.style.height = "100%"
            content.style.width = "100%";

            section2.style.gap = "1rem"
            section2.style.flexDirection = "column";
            section2.style.height = "100%";
            mainImg.style.width = "100%";
            mainImg.style.height = "auto";
        }
        else if (window.innerWidth < 440) {
            content.style.height = "100%"
            content.style.width = "100%";

            section2.style.gap = "1rem"
            section2.style.height = "100%";
            section2.style.flexDirection = "column";
            mainImg.style.width = "100%";
            mainImg.style.height = "auto";

        }
        else {
            section2.style.background = "white";
            section2.style.height = "100%";
            section2.style.display = "flex"
            section2.style.padding = "90px 60px"

        }
    }

    window.addEventListener('resize', ResponsiveSection2);
    ResponsiveSection2();

    return section2;

}
// -----------------------------------------------------Section3---------------------------------------------
function section3() {
    const section3 = document.createElement('section');
    let content = document.createElement('div');
    content.style.gap = "3rem"
    content.style.height = "100%"
    content.style.display = "flex"
    content.style.padding = " 40px 40px"

    const h1 = document.createElement("h1");
    h1.style.fontSize = "40px"
    h1.style.fontWeight = "100"
    h1.innerText = "An Interface For Lifestyle";
    const p = document.createElement("p");
    p.style.fontSize = "18px"
    p.style.width = "50%"
    p.style.margin = "2rem auto"
    p.style.marginBottom = "5rem"
    p.style.color = "hsl(195, 2%, 64%)"
    p.innerText = "Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks."

    const mainImg = document.createElement("img")
    mainImg.src = "./images/iphone-ipad.jpg"
    mainImg.style.width = "600px"
    content.appendChild(mainImg)


    // ---------------------------------------------Features Box------------------------------------

    const features = document.createElement("div");

    features.style.display = "flex";
    features.style.padding = "30px"
    features.style.flexWrap = "wrap"
    features.style.width = "60%";
    features.style.borderRadius = "10px";
    features.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    features.style.background = "white";


    let featuresContent = [
        { icon: "fa-regular fa-bookmark", title: "Easy Prototyping", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-wave-square", title: "Sensor Bridge", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-chart-simple", title: "Strategist", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-paint-brush", title: "Art Direction", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" }
    ];

    featuresContent.forEach(obj => {
        const feature = document.createElement("div");
        feature.style.display = "flex";
        feature.style.alignItems = "center"
        feature.style.justifyContent = "center"


        feature.style.flexDirection = "column";
        feature.style.padding = "10px";
        feature.style.width = "45%";
        const icon = document.createElement("i");
        obj.icon.split(' ').forEach(cls => icon.classList.add(cls));
        icon.style.color = "#067eff"

        const title = document.createElement("h4");
        title.innerText = obj.title;
        title.style.fontSize = "20px"
        title.style.margin = "15px 0px "
        title.style.fontWeight = "100"
        const featureContent = document.createElement("p");
        featureContent.innerText = obj.content;
        featureContent.style.color = "hsl(195, 2%, 64%)"
        featureContent.style.margin = "10px 0px  0px 0px"

        feature.appendChild(icon);
        feature.appendChild(title);
        feature.appendChild(featureContent);
        features.appendChild(feature);
    });



    content.appendChild(features)

    section3.appendChild(h1);
    section3.appendChild(p);
    section3.appendChild(content);
    section3.style.background = "hsl(0, 0%, 98%)";
    section3.style.height = "100%";
    section3.style.width = "100%";
    section3.style.display = "flex"
    section3.style.flexDirection = "column"
    section3.style.textAlign = "center"
    section3.style.height = "max-content"
    section3.style.padding = "90px 0px"

    // ---------------------------------------responsive section3----------------------------------------

    function ResponsiveSection3() {
        if (window.innerWidth < 768) {
            section3.style.flexDirection = "column";
            section3.style.justifyContent = "center"
            section3.style.alignItems = "center"
            section3.style.height = "100%";

            content.style.width = "100%";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";

            mainImg.style.width = "80%";
            mainImg.style.height = "auto";
            Array.from(features.children).forEach(child => {
                child.style.width = "100%"
            })
        } else if (window.innerWidth < 992) {
            section3.style.flexDirection = "column";
            section3.style.justifyContent = "center"
            section3.style.alignItems = "center"
            section3.style.height = "100%";

            content.style.width = "100%";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.alignItems = "center";

            mainImg.style.width = "60%";
            mainImg.style.height = "auto";
        }
    }

    window.addEventListener('resize', ResponsiveSection3);
    ResponsiveSection3();
    return section3;
}

// ----------------------------------------------------section4---------------------------------------------
function section4() {
    const section4 = document.createElement('section');
    const imageUrl = './images/promo-video.jpg';
    section4.style.backgroundImage = 'url(' + imageUrl + ')';
    section4.style.backgroundSize = 'cover'
    section4.style.backgroundPosition = "center"
    section4.style.height = "70vh"
    section4.style.display = "flex"
    section4.style.flexDirection = "column"
    section4.style.textAlign = "center"
    section4.style.padding = "90px 0px"


    let content = document.createElement('div');
    content.style.color = "white"
    content.style.width = "100%"
    content.style.height = "400px"
    content.style.display = "flex"

    content.style.flexDirection = "column"
    content.style.alignItems = "center"
    content.style.justifyContent = "center"

    const h1 = document.createElement("h1");
    h1.innerText = "Watch Our Promo Video";

    h1.style.fontSize = "40px"
    h1.style.fontWeight = "100"


    const p = document.createElement("p");

    p.style.fontSize = "16px"
    p.style.color = "hsl(195, 2%, 64%)"
    p.style.width = "60%"


    p.innerText = "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus"
    const videoCircle = document.createElement("div")
    videoCircle.style.color = "white"
    videoCircle.style.width = "60px"
    videoCircle.style.height = "60px"
    videoCircle.style.background = "hsl(215, 84%, 56%)"
    const videoicon = document.createElement("img")
    videoicon.src = "./images/play_arrow_45dp_FFFF_FILL0_wght400_GRAD0_opsz48.png"
    videoicon.style.width = "60px"
    videoCircle.style.borderRadius = "50%"
    videoCircle.style.display = "flex"
    videoCircle.style.alignItems = "center"
    videoCircle.style.justifyContent = "center"
    videoCircle.style.padding = " 40px 40px"
    videoCircle.style.marginTop = "30px"
    videoCircle.appendChild(videoicon)

    content.appendChild(h1)
    content.appendChild(p)
    content.appendChild(videoCircle)
    section4.appendChild(content);

    return section4;
}
// ----------------------------------------footer---------------------------------------------
function Footer() {
    const footer = document.createElement('footer');

    const mainFooter = document.createElement('div');
    mainFooter.classList.add('main-footer');

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('rightDiv');


    const img = document.createElement('img');
    rightDiv.appendChild(img);
    img.src = "./images/logo-alt (1).png"
    img.style.width = "170px"
    img.style.height = "50px"

    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');

    let IconsClasses = ["fa-brands fa-facebook", "fa-brands fa-twitter", "fa-brands fa-instagram"]
    IconsClasses.forEach(item => {

        const icon = document.createElement('div');
        icon.classList.add('icon');
        const iTag = document.createElement('i');
        const aTag = document.createElement('a');
        item.split(" ").forEach(cls => { iTag.classList.add(cls) })
        aTag.href = '#';
        iTag.appendChild(aTag);
        icon.appendChild(iTag);
        socialIcons.appendChild(icon);

        rightDiv.appendChild(socialIcons);
    })
    // ------------------------------------------footer-columns-------------------------------------------
    const leftDiv = document.createElement('div');
    leftDiv.classList.add('leftDiv');

    const columnData = [
        { title: 'PRODUCTS', links: ['teams', 'Blogs', 'FQA'] },
        { title: 'RESOURSES', links: ['SignUp', 'Login', 'BlOG'] },
        { title: 'COMPANY', links: ['Career', 'Contact', 'Investor', 'Terms'] },
        { title: 'COMPANY', links: ['About', 'Contact', 'Team', 'Privecy Policy'] }
    ];

    columnData.forEach(column => {
        const colunm = document.createElement('div');
        colunm.classList.add('coulmn');

        const h6 = document.createElement('h6');
        h6.textContent = column.title;
        colunm.appendChild(h6);

        const ul = document.createElement('ul');
        column.links.forEach(linkText => {
            const li = document.createElement('li');
            const aTag = document.createElement('a');
            aTag.href = '#';
            aTag.textContent = linkText;
            li.appendChild(aTag);
            ul.appendChild(li);
        });

        colunm.appendChild(ul);
        leftDiv.appendChild(colunm);
    });

    mainFooter.appendChild(rightDiv);
    mainFooter.appendChild(leftDiv);

    const textCenter = document.createElement('div');
    textCenter.classList.add('text-center');

    const p = document.createElement('p');
    p.textContent = 'Copyright © 2020. Designed & Developed by Themefisher';
    textCenter.appendChild(p);

    footer.appendChild(mainFooter);
    footer.appendChild(textCenter);


    const style = document.createElement('style');
    style.textContent = `
            .main-footer {
                display: flex;
                justify-content: space-between;
                padding: 50px 70px;
                height:250px;
                background-color: hsl(228, 9%, 11%);
            }
            .rightDiv{
                     display: flex;
                     justify-content:center;
                      flex-direction:column;
            } 
            .leftDiv {
                display: flex;
                overflow-x: hidden; 
                   
            }
            .social-icons {
                display: flex;
                gap: 10px;
                margin-top:20px;
            }
            .icon {
                display: inline-block;
                 width: 40px;
            height: 40px;
            background: hsl(240, 3%, 25%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            }
            .leftDiv > div {
                margin: 3rem 0 0 7rem;
        
            }
            h6 {
                margin: 0 0px 30px 0;
                color:white;
                font-size: 14px
            }
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            li {
                margin-bottom: 20px;
            }
            li a{
           text-decoration:none;
            font-size: 13px;

           color:hsl(195, 2%, 64%);

                }
            .text-center {
            color:hsl(195, 2%, 64%);

                text-align: center;
                padding: 10px;
                background-color:hsl(210, 10%, 23%);
                font-size:14px;
            }
        `;



    function ResponsiveFooter() {

        if (window.innerWidth < 768) {
            mainFooter.style.flexDirection = 'column';
            mainFooter.style.alignItems = 'center';
            mainFooter.style.padding = '20px 10px';
            leftDiv.style.margin = '0';
            leftDiv.style.order = "1"
            leftDiv.style.alignItems = 'center';
            leftDiv.style.flexWrap = "wrap"
            rightDiv.style.marginTop = '20px';
            rightDiv.style.order = "2"
            mainFooter.style.height = "100%"
                        leftDiv.style.overflowX="hidden"


        } else if(window.innerWidth<1024) {
            mainFooter.style.flexDirection = 'row';
            mainFooter.style.alignItems = 'flex-start';
            mainFooter.style.padding = '50px 70px';
            leftDiv.style.overflowX="hidden"
            rightDiv.style.marginTop = '3rem';
        }
    }

    window.addEventListener('resize', ResponsiveFooter);
    ResponsiveFooter();


    document.head.appendChild(style);

    return footer;
}
// -----------------------------------------------assemble the Page-------------------------------------------
function assemblePage() {
    const container = document.createElement('div');

    BodyStyles();

    container.appendChild(createNav());
    container.appendChild(Section1());
    container.appendChild(section2());
    container.appendChild(section4());

    container.appendChild(section3());
    container.appendChild(Footer());


    document.body.appendChild(container);
    document.head.innerHTML += ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
    document.title = "SmallApp";








}

assemblePage();
