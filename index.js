

function BodyStyles() {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.boxSizing = 'border-box';
    document.body.style.fontFamily = 'Open Sans, sans-serif';
}

function createNav() {
    const nav = document.createElement('div');

    nav.style.cssText = `
        background-color: rgb(255, 255, 255);
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 0 60px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    `;
    const logo = document.createElement("img")
    logo.src = "./images/logo.png"
    const navlist = document.createElement("ul");

    navlist.style.cssText = `
      list-style: none;
        align-items: center;
        display: flex;
    `
    const links = ['Home', 'About', 'Pages', 'Contact']

    links.forEach(linkText => {
        const listItem = document.createElement('li');
        listItem.style.marginBottom = "0px"
        const link = document.createElement('a');
        link.innerText = linkText;
        link.style.cssText = `
            font-size: 16px;
            color: black;
            text-decoration: none;
            margin-left: 20px;
            cursor: pointer;
    `;
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
            navlist.style.display = "none"
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
            navlist.style.display = "block"
            navlist.style.display = "flex";
            navlist.style.flexDirection = 'row';
            navlist.style.justifyContent = "space-between";
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
    return nav;
}

function page() {
    const page = document.createElement('div');
    const Section1 = document.createElement('section');
    const container = document.createElement('div');
    const mainImg1 = document.createElement("img")
    mainImg1.src = "./images/mobile (1).png"
    let content1 = document.createElement('div');
    const title = document.createElement("h1");
    title.innerText = "Showcase your app with Small Apps";
    const p = document.createElement("p");
    p.innerText = "Besides its beautiful design. Laapp is an incredibly rich core framework for you to showcase your App."

    container.style.cssText = `
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3rem;
    `;
    Section1.style.cssText = `
        background: linear-gradient(45deg, hsl(215, 73%, 52%), hsl(218, 96%, 18%));
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        padding: 90px 60px;
    `;
    content1.style.cssText = `
        color: white;
        width: 50%;
        height: 400px;
        display: flex;
        flex-direction: column;
        padding: 40px 10px;
    `;
    mainImg1.style.cssText = `
    width: 400px;
    height: 500px;
`;
    title.style.cssText = `
        font-size: 50px;
    `;

    p.style.cssText = `
        font-size: 16px;
        line-height: 25px;
    `;


    const button = document.createElement("button")
    button.innerText = "DOWENOAD NOW"
    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = "hsl(227, 87%, 59%)";
    });

    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = "hsl(215, 84%, 56%)";
    });

    button.style.cssText = `
    padding: 10px 20px;
    background-color: hsl(215, 84%, 56%);
    color: white;
    width: 200px;
    height: 60px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
`;
    content1.append(title, p, button)
    container.append(content1, mainImg1)

    const features1 = document.createElement("div");

    let featuresContent1 = [
        { src: "./images/colors_24.png", title: "Themes Made Easy", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
        { src: "./images/clear_day_24.png", title: "Powerful Design", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
        { src: "./images/cloud_24.png", title: "Creative Content", content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae tempore ipsam dignissimos molestias." },
    ];

    featuresContent1.forEach(obj => {
        const feature = document.createElement("div");
        feature.style.cssText = `
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        padding: 15px 10px;
        background: white;
    `;
        const icon = document.createElement("img");
        icon.src = obj.src;
        icon.style.width = "50px"
        const title = document.createElement("h4");
        title.innerText = obj.title;
        const featureContent = document.createElement("p");
        featureContent.innerText = obj.content;
        featureContent.style.color = "hsl(195, 2%, 64%)"
        feature.append(icon, title, featureContent)
        features1.appendChild(feature);
    });


    features1.style.cssText = `
    display: flex;
    width: 100%;
    border-radius: 10px;
    margin-top: 5rem;
    padding: 30px 20px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

    Section1.append(container, features1);

    // -----------------------------------------------section2-------------------------------------
    const section2 = document.createElement('section');
    let content2 = document.createElement('div');
    const title2 = document.createElement("h1");
    title2.innerText = "Increase your productivity with Small Apps";
    const text2 = document.createElement("p");
    text2.innerText = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const p2 = document.createElement("p");
    p2.innerText = "InVision is a window into everything that's being designed at Twitter. It gets all of our best work in one place."
    const test = document.createElement("div");
    const person = document.createElement("img");
    person.src = "./images/feature-testimonial-thumb.jpg"
    const name = document.createElement("span");
    name.innerText = " Jonathon Andrew , Themefisher.com"
    test.append(person, name)
    content2.append(title2, text2, p2, test)
    const mainImg2 = document.createElement("img")
    mainImg2.src = "./images/feature-new-01.jpg"

    content2.style.cssText = `
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
`;

    title2.style.cssText = `
    font-size: 45px;
    font-weight: 20;
`;

    text2.style.cssText = `
    font-size: 16px;
    line-height: 26px;
    color: hsl(195, 2%, 64%);
`;

    p2.style.cssText = `
    font-size: 18px;
    font-family: 'Lora', serif, italic;
    font-style: italic;
`;

    name.style.cssText = `
    color: hsl(195, 2%, 64%);
    margin-left: 15px;
`;

    test.style.cssText = `
    display: flex;
`;

    mainImg2.style.cssText = `
    width: 60%;
    height: 600px;
`;
    section2.style.cssText = `
    background: white;
    height: 100%;
    display: flex;
    padding: 90px 60px;
`;

    section2.append(mainImg2, content2);

    // -----------------------------------------------------Section3---------------------------------------------
    const section3 = document.createElement('section');

    section3.style.cssText = `
    background: hsl(0, 0%, 98%);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: max-content;
    padding: 90px 0;
`;
    let content3 = document.createElement('div');

    content3.style.cssText = `
    gap: 3rem;
    height: 100%;
    display: flex;
    padding: 40px;
`;

    const title3 = document.createElement("h1");
    title3.innerText = "An Interface For Lifestyle";
    const text3 = document.createElement("p");
    text3.innerText = "Small Apps makes it easy to stay on top of your Life Style. No late tasks. No gimmicks."
    const mainImg3 = document.createElement("img")
    mainImg3.src = "./images/iphone-ipad.jpg"
    title3.style.cssText = `
    font-size: 40px;
    font-weight: 100;
`;
    text3.style.cssText = `
    font-size: 18px;
    width: 50%;
    margin: 2rem auto;
    margin-bottom: 5rem;
    color: hsl(195, 2%, 64%);
`;
    mainImg3.style.cssText = `width: 600px;`;

    // --------------------------------Features------------------------------------

    const features = document.createElement("div");
    features.style.cssText = `

    width: 60%;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1.5rem;
    padding: 40px 20px;
`;

    let featuresContent = [
        { icon: "fa-regular fa-bookmark", title: "Easy Prototyping", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-wave-square", title: "Sensor Bridge", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-chart-simple", title: "Strategist", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" },
        { icon: "fa-solid fa-paint-brush", title: "Art Direction", content: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui" }
    ];

    featuresContent.forEach(obj => {
        const feature = document.createElement("div");
        feature.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    `;

        const icon = document.createElement("i");
        obj.icon.split(' ').forEach(cls => icon.classList.add(cls));
        icon.style.color = "#067eff"
        const title = document.createElement("h4");
        title.textContent=obj.title;
        title.style.cssText = `
        font-size: 20px;
        margin: 15px 0;
        font-weight: 100;
    `;

        const featureContent = document.createElement("p");
        featureContent.innerText = obj.content;
        featureContent.style.cssText = `
        color: hsl(195, 2%, 64%);
        margin: 10px 0;
        width:85%;
    `;

        feature.append(icon, title, featureContent)
        features.appendChild(feature);
    });


    content3.append(mainImg3, features)
    section3.append(title3, text3, content3);

    // -------------------------------------------------section4---------------------------------------------
    const section4 = document.createElement('section');
    const imageUrl = './images/promo-video.jpg';
    section4.style.backgroundImage = 'url(' + imageUrl + ')';
    section4.style.cssText = `
    background-image: url('./images/promo-video.jpg');
    background-size: cover;
    background-position: center;
    height: 70vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 90px 0;
`;
    let content = document.createElement('div');
    content.style.cssText = `
    color: white;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

    const h1 = document.createElement("h1");
    h1.innerText = "Watch Our Promo Video";

    h1.style.fontSize = "40px"
    h1.style.fontWeight = "100"
    const text4 = document.createElement("p");
    text4.innerText = "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus"
    text4.style.cssText = `
    font-size: 16px;
    color: hsl(195, 2%, 64%);
    width: 60%;
`;
    const videoCircle = document.createElement("div")
    const videoicon = document.createElement("img")
    videoicon.src = "./images/play_arrow_45dp_FFFF_FILL0_wght400_GRAD0_opsz48.png"
    videoCircle.style.cssText = `
    color: white;
    width: 60px;
    height: 60px;
    background: hsl(215, 84%, 56%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    margin-top: 30px;
`;
    videoicon.style.cssText = ` width: 60px;`;

    videoCircle.appendChild(videoicon)
    content.append(h1, text4, videoCircle)
    section4.appendChild(content);
    page.append(Section1, section2, section4, section3);

    // -----------------------------------responsive style----------------------------//
    function ResponsiveStyle() {
        if (window.innerWidth < 900) {
            Section1.style.justifyContent = "center"
            container.style.display = "flex"
            container.style.flexDirection = "column"
            container.style.alignItems = "center"
            container.style.justifyContent = "center"
            container.style.gap = "3rem"
            features.style.marginTop = "0px"
            h1.style.fontSize = "50px"
            content1.style.order = "2"
            content1.style.width = "100%";
            content1.style.textAlign = "center"
            content1.style.alignItems = "center";
            mainImg2.style.width = "100%";
            mainImg1.style.order = "1"
            features1.style.flexDirection = "column";
            features.style.display="flex"
            features.style.flexDirection = "column";
            features.style.width = "90%"
            section3.style.justifyContent = "center"
            section3.style.alignItems = "center"
            section3.style.height = "100%";
            content3.style.display = "flex"
            content3.style.flexDirection = "column";
            content3.style.alignItems = "center"
            mainImg3.style.width = "90%";

            Array.from(features.children).forEach(child => {
                child.style.width = "100%"
            })

            section2.style.flexDirection = "column";
            content2.style.height = "100%"

        }

        else {
            container.style.flexDirection = "row"
            content1.style.alignItems = "flex-start"
            content1.style.textAlign = "left"
            content1.style.order = "1"
            mainImg1.style.order = "2"
            features1.style.flexDirection = "row";
            section2.style.flexDirection = "row";
            content3.style.flexDirection = "row";
            mainImg3.style.width = "50%";
            features.style.display="grid"
            features.style.width = "60%"

            // features.style.flexDirection = "row";
        }
    }

    window.addEventListener('resize', ResponsiveStyle);
    ResponsiveStyle();

    return (page);
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
        { title: 'COMPANY', links: ['Career', 'Contact', 'Investor'] },
        { title: 'COMPANY', links: ['About', 'Contact', 'Privecy Policy'] }
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
            leftDiv.style.alignItems = 'center';
            leftDiv.style.flexWrap = "wrap"
            rightDiv.style.marginTop = '20px';
            mainFooter.style.height = "100%"
            leftDiv.style.overflowX = "hidden"


        } else {
            mainFooter.style.flexDirection = 'row';
            mainFooter.style.alignItems = 'flex-start';
            mainFooter.style.padding = '50px 70px';
            leftDiv.style.overflowX = "hidden"
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
    container.appendChild(page());
    container.appendChild(Footer());

    document.body.appendChild(container);
    document.head.innerHTML += ` <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
    document.title = "SmallApp";

}

assemblePage();
