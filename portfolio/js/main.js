  "use strict";
let btn=document.querySelector(".menuBtn")
if(!localStorage.theme){
    localStorage.setItem("theme","light");

}
document.body.className=localStorage.theme;
if(localStorage.theme=="dark"){
    btn.innerHTML='<i class="fa-solid fa-sun"></i>'
}else{
    btn.innerHTML='<i class="fa-solid fa-moon"></i>'
}

btn.addEventListener("click",function(){
    if(localStorage.theme=="light"){
        document.body.className="dark";
        btn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }else{
        document.body.className="light";
        btn.innerHTML='<i class="fa-solid fa-moon"></i>'

    }
    localStorage.theme=document.body.className
})

let langArr={
    "logoLi":{
        "hy":"Ֆինեքսօ",
        "ru":"Финексо",
        "en":"Finexo"
    },
    "homeLi":{
        "hy":"Գլխավոր",
        "ru":"Главный",
        "en":"Home"
    },
    "aboutLi":{
        "hy":"Մեր մասին",
        "ru":"О нас",
        "en":"About"
    },
    "seviceLi":{
        "hy":"Ծառայություններ",
        "ru":"Услуги",
        "en":"Sevices"
    },
    "whyLi":{
        "hy":"Ինչու մենք",
        "ru":"Почему мы",
        "en":"Why us"
    },
    "teamLi":{
        "hy":"Թիմ",
        "ru":"Группа",
        "en":"Team"
    },
    "FasolidLi":{
        "hy":"Մուտք",
        "ru":"Вход",
        "en":"Login"
    },

    "sliderHeader":{
        "hy":"Քրիսպո արժույթ",
        "ru":"Криспо валютa",
        "en":"CRYPTO CURRENCY"

    },
    "sliderText":{
        "hy":"FINEXO.com-ը վերջնական պորտալն է, որտեղ և՛ սկսնակները, և՛ ավելի առաջադեմ հաճախորդները գտնում են այն ամենը, ինչ անհրաժեշտ է իրենց առևտրային կարողությունները բարձրացնելու և աշխարհի ամենահայտնի ակտիվներին մուտք գործելու համար: ",
        "ru":"FINEXO.com — это идеальный портал, на котором как новички, так и более продвинутые клиенты найдут все необходимое для улучшения своих торговых способностей и доступа к самым популярным активам в мире.",
        "en":"Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic?"
    },
    "sliderBtn":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "sliderHeader0":{
        "hy":"Քրիսպո արժույթ",
        "ru":"Криспо валютa",
        "en":"CRYPTO CURRENCY"

    },
    "sliderText0":{
        "hy":"Մենք գերազանցել ենք այս ակնկալիքները և այդ ժամանակից ի վեր վերածվել ենք առցանց առևտրի բազմազգ և բազմալեզու ապրանքանիշի:",
        "ru":"Мы превзошли эти ожидания и с тех пор превратились в многонациональный и многоязычный бренд в сфере онлайн-торговли.",
        "en":"Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi."
    },
    "sliderBtn0":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "sliderHeader1":{
        "hy":"Քրիսպո արժույթ",
        "ru":"Криспо валютa",
        "en":"CRYPTO CURRENCY"

    },
    "sliderText1":{
        "hy":"FINEXO.com-ը կարճաժամկետ նպատակ է դրել ստեղծել պարզ և հեշտ օգտագործվող առևտրային միջավայր բոլոր մակարդակների թրեյդերների համար: Մենք գերազանցել ենք այս ակնկալիքները և այդ ժամանակից ի վեր վերածվել ենք առցանց առևտրի բազմազգ և բազմալեզու ապրանքանիշի:",
        "ru":"FINEXO.com поставил перед собой краткосрочную цель по созданию простой и удобной торговой среды для трейдеров всех уровней. Мы превзошли эти ожидания и с тех пор превратились в многонациональный и многоязычный бренд в сфере онлайн-торговли.",
        "en":"Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi."
    },
    "sliderBtn1":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "serviceHeader":{
        "hy":"Մեր ծառայությունները",
        "ru":"Наши услуги",
        "en":"Our services"
    },
    "serviceText":{
        "hy":"Lorem Ipsum-ի հատվածների շատ տարբերակներ կան, բայց մեծամասնությունը փոփոխության է ենթարկվել",
        "ru":"Существует множество вариаций отрывков Lorem Ipsum, но большинство из них претерпело изменения.",
        "en":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"
    },
    "cardHeaderLi":{
        "hy":"Արտարժույթի դրամապանակ",
        "ru":"Текущий кошелек",
        "en":"Currency wallet"
    },
    "cardTextLi":{
        "hy":"Փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ նայում է դրա դասավորությանը: Օգտագործման կետը",
        "ru":"Тот факт, что читатель будет отвлекаться на читаемое содержимое страницы, глядя на ее макет. Суть использования",
        "en":"Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
    },
    "serviceBtnLi":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "cardHeaderMiddle":{
        "hy":"Անվտանգության պահեստավորում",
        "ru":"Безопасность хранения",
        "en":"Security storage"
    },
    "cardTextMiddle":{
        "hy":"Փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ նայում է դրա դասավորությանը: Օգտագործման կետը",
        "ru":"Тот факт, что читатель будет отвлекаться на читаемое содержимое страницы, глядя на ее макет. Суть использования",
        "en":"Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
    },
    "cardBtnMiddle":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "cardHeaderLast":{
        "hy":"Փորձագիտական ​​աջակցություն",
        "ru":"Экспертная поддержка",
        "en":"Expert support"
    },
    "cardTextLast":{
        "hy":"Փաստ է, որ ընթերցողը շեղվելու է էջի ընթեռնելի բովանդակությունից, երբ նայում է դրա դասավորությանը: Օգտագործման կետը",
        "ru":"Тот факт, что читатель будет отвлекаться на читаемое содержимое страницы, глядя на ее макет. Суть использования",
        "en":"Fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
    },
    "cardBtnLast":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "cardBtnSubmit":{
        "hy":"Դիտել բոլորը",
        "ru":"Читать болee",
        "en":"View all"
    },
    "aboutUs":{
        "hy":"Մեր մասին",
        "ru":"О нас",
        "en":"About Us"
    },
    "aboutUsText":{
        "hy":"Հիանալի է ոչ պակաս շողոքորթությունը, այլ կա՛մ ցանկացած հաճույք, կա՛մ բուն օրհնված իրերի հաճույքները",
        "ru":"Велико, что не меньшая лесть, а или всякие удовольствия, или удовольствия от самих блаженных вещей.",
        "en":"Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus"
    },
    "miniHeader":{
        "hy":"Մենք Finexo-ն ենք",
        "ru":"Мы Финексо",
        "en":"We Are Finexo"
    },
    "miniText":{
        "hy":"Գոյություն ունեն Lorem Ipsum-ի հատվածների բազմաթիվ տարբերակներ, բայց մեծամասնությունը փոփոխության է ենթարկվել ինչ-որ ձևով, ներարկված հումորի կամ պատահական բառերի միջոցով, որոնք նույնիսկ փոքր-ինչ հավատալի չեն թվում: Եթե ​​դուք պատրաստվում եք օգտագործել Lorem Ipsum-ի հատվածը, ապա պետք է վստահ լինեք, որ տեքստի մեջտեղում որևէ ամոթալի բան չի թաքնված:",
        "ru":"Существует множество вариаций отрывков Lorem Ipsum, но большинство из них претерпело изменения в той или иной форме из-за привнесенного юмора или случайных слов, которые не выглядят даже немного правдоподобно. Если вы собираетесь использовать отрывок из Lorem Ipsum, вам нужно убедиться, что в середине текста не спрятано ничего смущающего.",
        "en":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text"
    },
    "miniTextNext":{
        "hy":"Հնարավոր է, որ մենք չկարողանանք հետ մղել վարժությունը հաճույքներ տվողների հանդեպ ատելությամբ, բայց դա կլուծվի՝ մերժելով կոռումպացված պաշտոնները, որոնցից մենք առաջնորդում ենք դրա մյուսներին: Մեզ համար բոլորից յուրաքանչյուրը նպատակահարմար է թվում։",
        "ru":"Возможно, мы не сможем противостоять этому упражнению ненавистью к тем, кто доставляет удовольствия, но это будет решено путем отказа от коррумпированных должностей, с которых мы руководим другими. Нам представляется целесообразным любой из всех.",
        "en":"Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita."
    },
    "miniBtn":{
        "hy":"Կարդալ ավելին",
        "ru":"Читать болee",
        "en":"Read more"
    },
    "whyHeader":{
        "hy":"Ինչու՞ ընտրել մեզ",
        "ru":"Почему выбрали нас",
        "en":"Why Choose Us"
    },
    "whyHeaderMini":{
        "hy":"Փորձագիտական ​​կառավարում",
        "ru":"Экспертное управление",
        "en":"Expert Management"
    },
    "whyTextMini":{
        "hy":"Նա ատում է ճարտարապետի ունեցած իրերի պատահարները և երբեք չի բացվի ավելի դաժան ցավերի առաջ։ ",
        "ru":"Он ненавидит происшествия с вещами, принадлежащими архитектору, и никогда не поддастся более суровым страданиям! ",
        "en":"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! "
    },
    "secureHeader":{
        "hy":"Ապահով ներդրում",
        "ru":"Безопасные инвестиции",
        "en":"Secure Investment"
    },
    "secureText":{
        "hy":"Ընտրել կոռումպացվածը, աշխատանքի դժվարությունները, ի՞նչ բացի կյանքի հաճույքից: Այն ժամանակ, երբ մենք հաճույքով ենք այդ պարտականությունները կատարում, մենք ոչնչից չենք վախենում։ Նեղության ժամանակ նրանք չգիտեն, որ ես գալու եմ.",
        "ru":"Выбрать испорченное, хлопоты трудов, что, как не удовольствие самой жизни? Пока мы выполняем эти обязанности с удовольствием, мы ничего не боимся. Во время скорби они не знают, что Я приду",
        "en":"Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"
    },
    "tradingHeader":{
        "hy":"Ակնթարթային առևտուր",
        "ru":"Мгновенная торговля",
        "en":"Instant Trading"
    },
    "tradingText":{
        "hy":"Նա ատում է ճարտարապետի ունեցած իրերի պատահարները և երբեք չի բացվի ավելի դաժան ցավերի առաջ։ Ընտրել կոռումպացվածը, աշխատանքի դժվարությունները, ի՞նչ բացի կյանքի հաճույքից: Այն ժամանակ, երբ մենք հաճույքով ենք այդ պարտականությունները կատարում, մենք ոչնչից չենք վախենում։ Նեղության ժամանակ նրանք չգիտեն, որ ես գալու եմ.",
        "ru":"Он ненавидит происшествия с вещами, принадлежащими архитектору, и никогда не поддастся более суровым страданиям! Выбрать испорченное, хлопоты трудов, что, как не удовольствие самой жизни? Пока мы выполняем эти обязанности с удовольствием, мы ничего не боимся. Во время скорби они не знают, что Я приду",
        "en":"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"
    },
    "customerHeader":{
        "hy":"Երջանիկ Հաճախորդներ",
        "ru":"Счастливые клиенты",
        "en":"Happy Customers"
    },
    "customerText":{
        "hy":"Նա ատում է ճարտարապետի ունեցած իրերի պատահարները և երբեք չի բացվի ավելի դաժան ցավերի առաջ։ Ընտրել կոռումպացվածը, աշխատանքի դժվարությունները, ի՞նչ բացի կյանքի հաճույքից: Այն ժամանակ, երբ մենք հաճույքով ենք այդ պարտականությունները կատարում, մենք ոչնչից չենք վախենում։ Նեղության ժամանակ նրանք չգիտեն, որ ես գալու եմ.",
        "ru":"Он ненавидит происшествия с вещами, принадлежащими архитектору, и никогда не поддастся более суровым страданиям! Выбрать испорченное, хлопоты трудов, что, как не удовольствие самой жизни? Пока мы выполняем эти обязанности с удовольствием, мы ничего не боимся. Во время скорби они не знают, что Я приду",
        "en":"Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus"
    },
    "submitBtn":{
        "hy":"Դիտել բոլորը",
        "ru":"Читать болee",
        "en":"View all"
    },
    "teamHeader":{
        "hy":"Մեր թիմը",
        "ru":"Наша команда",
        "en":"Our Team"
    },
    "teamFirstName":{
        "hy":"Ջոզեֆ Բրաուն",
        "ru":"Джозеф Браун",
        "en":"Joseph Brown"
    },
    "teamFirstSpecialist":{
        "hy":"Մարքեթինգի ղեկավար",
        "ru":"руководитель отдела маркетинга",
        "en":"Marketing Head"
    },
    "teamSecondName":{
        "hy":"Նենսի Ուայթ",
        "ru":"Нэнси Уайт",
        "en":"Nancy White"
    },
    "teamSecondSpecialist":{
        "hy":"Մարքեթինգի ղեկավար",
        "ru":"руководитель отдела маркетинга",
        "en":"Marketing Head"
    },
    "teamThirdName":{
        "hy":"Կոմս Մարտինես",
        "ru":"Эрл Мартинес",
        "en":"Earl Martinez"
    },
    "teamThirdSpecialist":{
        "hy":"Մարքեթինգի ղեկավար",
        "ru":"руководитель отдела маркетинга",
        "en":"Marketing Head"
    },
    "teamForthName":{
        "hy":"Կոմս Մարտինես",
        "ru":"Эрл Мартинес",
        "en":"Earl Martinez"
    },
    "teamForthSpecialist":{
        "hy":"Մարքեթինգի ղեկավար",
        "ru":"руководитель отдела маркетинга",
        "en":"Marketing Head"
    },
    "opinionHeader":{
        "hy":"Ինչ են ասում մեր հաճախորդները",
        "ru":"Что говорят наши клиенты",
        "en":"What says our Customers"
    },
    "opinionFirst":{
        "hy":"Զեն Կորտ",
        "ru":"Дзен-корт",
        "en":"Zen Court"
    },
    "opinionFirstText":{
        "hy":"Ինչպես մի քանի մեծ:",
        "ru":"Как некоторые большие.",
        "en":"Magna aliqua"
    },
    "optionFirstCard":{
        "hy":"Հաճախորդի համար շատ կարևոր է ուշադրություն դարձնել ադիպիսինգի գործընթացին: Ավելի մեծ լինել. Այս մարդը, ցավից ինչ-որ բան գտնելով, փախել է։ Կա՞ ինչ-որ բան, ով չգիտի իր ճկունությունը, ծառայությունները, օգուտները, կարիքների պատճառով իրենց ցավի օգուտները:",
        "ru":"Заказчику очень важно обратить внимание на процесс адиписки. Стать старше? Этот мужчина, обнаружив что-то болит, убежал. Есть ли кто-то, кто не знает гибкости, услуг, преимуществ, преимуществ их безболезненности из-за потребностей?",
        "en":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maiores? Quidem fugit dolore inventore iste. Aliquid est quis mollitia, officia, soluta commodi nesciunt earum dolorem laborum libero non quia necessitatibus?"
    },
    "opinionSecond":{
        "hy":"ԼուսԴեն",
        "ru":"ЛусДен",
        "en":"LusDen"
    },
    "opinionSecondText":{
        "hy":"Ինչպես մի քանի մեծ:",
        "ru":"Как некоторые большие.",
        "en":"Magna aliqua"
    },
    "optionSecondCard":{
        "hy":"Հաճախորդի համար շատ կարևոր է ուշադրություն դարձնել ադիպիսինգի գործընթացին: Ավելի մեծ լինել. Այս մարդը, ցավից ինչ-որ բան գտնելով, փախել է։ Կա՞ ինչ-որ բան, ով չգիտի իր ճկունությունը, ծառայությունները, օգուտները, կարիքների պատճառով իրենց ցավի օգուտները:",
        "ru":"Заказчику очень важно обратить внимание на процесс адиписки. Стать старше? Этот мужчина, обнаружив что-то болит, убежал. Есть ли кто-то, кто не знает гибкости, услуг, преимуществ, преимуществ их безболезненности из-за потребностей?",
        "en":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maiores? Quidem fugit dolore inventore iste. Aliquid est quis mollitia, officia, soluta commodi nesciunt earum dolorem laborum libero non quia necessitatibus?"
    },
    "Location":{
        "hy":"Գտնվելու վայրը",
        "ru":"Расположение",
        "en":"Location"
    },
    "LocationTel":{
        "hy":"Հեռ. +01 1234567890 ",
        "ru":"Позвоните +01 1234567890",
        "en":"Call +01 1234567890"
    },
    "infoHeader":{
        "hy":"Ինֆորմացիա",
        "ru":"Информация",
        "en":"Info"
    },
    "infoText":{
        "hy":"Անհրաժեշտ է՝ սա դարձնել համացանցի առաջին իսկական գեներատորը: ",
        "ru":"Необходимо сделать это первым настоящим генератором в Интернете. Он использует словарь, содержащий более 200 латинских слов в сочетании с несколькими",
        "en":"necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful"
    },
    "infoLink":{
        "hy":"Հղումներ",
        "ru":"Ссылки",
        "en":"Links"
    },
    "infoHome":{
        "hy":"Գլխավոր",
        "ru":"Главный",
        "en":"Home"
    },
    "infoAbout":{
        "hy":"Մեր մասին",
        "ru":"О нас",
        "en":"About"
    },
    "infoServices":{
        "hy":"Ծառայություններ",
        "ru":"Услуги",
        "en":"Sevices"
    },
    "infoWhyUs":{
        "hy":"Ինչու մենք",
        "ru":"Почему мы",
        "en":"Why us"
    },
    "infoTeam":{
        "hy":"Թիմ",
        "ru":"Группа",
        "en":"Team"
    },
    "subsribeText":{
        "hy":"Բաժանորդագրվել",
        "ru":"Подписаться",
        "en":"Subscribe"
    },
    "SubscribeBtn":{
        "hy":"Բաժանորդագրվել",
        "ru":"Подписаться",
        "en":"Subscribe"
    },


}
let allLang=["hy","en","ru"]
let select=document.querySelector(".lang-site");
select.addEventListener("change",function(){
    let lang=select.value 
    console.log(lang)
    location.href=window.location.pathname+"#"+lang
    console.log(window.location)
})
function changeLang(){
    let hash=window.location.hash
    console.log(hash)
    hash=hash.slice(1)
    console.log(hash)
    if(!allLang.includes(hash)){
        location.href=window.location.pathname+"#hy"
    }
    window.onhashchange=function(){
        location.reload()
    }
    select.value=hash;
    for(let key in langArr){
        let elem=document.querySelector(`[data-lang=${key}]`)
        console.log(elem)
        if(elem){
            elem.innerHTML=langArr[key][hash]

        }
       
    }
}
changeLang()
