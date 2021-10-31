const quotes = [

    {
        quote: "자기를 아는 것이 최대의 지혜이다.",
        author: "탈무드"
    },
    {
        quote: "불은 쇠를 단련시키고 역경은 강한 사람을 단련시킨다.",
        author: "세네카"
    },
    {
        quote: "인내는 희망을 품은 기술이다.",
        author: "시루스"
    },
    {
        quote: "만일 지금도 위인만을 계속 쳐다보고 있다면, 그 사람은 아직까지 어린아이의 시선으로 이 세상을 보고 있다는 의미이다.",
        author: "아나이스 닌"
    },
    {
        quote: "운명은 용감한 자를 사랑한다.",
        author: "버질"
    },
    {
        quote: "만족하게 살고 때때로 웃으며 많은 사람을 사랑한 삶이 성공한다.",
        author: "스탠리"
    },
    {
        quote: "연인들은 마침내 어딘가에서 만나는 것이 아니다. 그들은 언제나 서로의 내부에 있다.",
        author: "루미"
    },
    {
        quote: "내가 삶에서 발견한 최대 모순은, 상처 입을 각오로 사랑을 하면 상처는 없고 사랑만 깊어진다는 것이다.",
        author: "테레사 수녀"
    },
    {
        quote: "공짜 치즈는 쥐 덫에만 놓여 있다.",
        author: "러시아 속담"
    },
    {
        quote: "만약 모든 사람의 충고대로 집을 짓는다면 삐뚤어진 집을 짓게 될 것이다.",
        author: "덴마크 속담"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;