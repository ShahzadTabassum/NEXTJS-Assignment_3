const BlogsData = [{
    id:1,
    slug:"Top-10-LLMs-for-Startups",
    discription: [
    <h2>Navigating the Landscape of Language Models for Startup Success</h2>,
    <h3>Navigating the Landscape of Language Models for Startup Success</h3>,
    <p>In the ever-evolving tech landscape, harnessing the power of Large Language Models (LLMs) has become a cornerstone for startups seeking innovation. From chatbots to content creation and beyond, the versatility of LLMs is unparalleled. However, choosing the right model is pivotal, considering factors like cost, complexity, and suitability for startup environments.
    To guide you through this decision-making process, I've curated a list of top-notch LLMs, both free and paid, tailored for startups. Let's delve into the features, pros, and cons of each, empowering you to make informed choices for your startup journey.
    If you're exploring ways to integrate advanced AI solutions seamlessly into your startup's operations, check out our AI services at TechloSet. Our tailored solutions cater to diverse business needs, ensuring your venture stays ahead in the realm of technological innovation. Discover the transformative potential of AI with TechloSet's comprehensive suite of services.
    </p>,
    <h3>1.GPT4All</h3>,
    <p>Overview: GPT4All is a free and open-source LLM that is based on the GPT-4 model by OpenAI. GPT4All allows you to access and use the GPT-4 model without any restrictions or limitations. You can use GPT4All to generate text, images, code, music, and more, using simple prompts or queries. You can also fine-tune the GPT-4 model on your own data and customize it for your specific domain or task.GPT4All is the best LLM for startups that want to experiment with the power and versatility of the GPT-4 model without spending a fortune.</p>
]
},
{
    id:2,
    slug:"A-React-Js-Framework",
    discription: [<h2>A Complete Guide to Next Js: A React Js Framework</h2>,<p>In the world of React, Next JS is one of the most popular frameworks for React. Next.js is a simple development environment built on top of React. It has a short learning curve, but even developers new to front-end development can learn it quickly. Therefore, developing a project with Next JS vs React JS is a unique experience. Comparing Next.js vs React, Next.js is a React framework, on the other hand, React is just a JavaScript library.</p>, <p>What is Next js?</p>,
    <p>Developed by Vercel, Next.js is open source and JavaScript Framework, allowing you to create fast and user-friendly web applications and static websites using React. In fact, it is based on Node.js and Babel, and it is integrated with React for creating single-page applications. This makes the Server-side simple and easy.</p>,
    <h3>Why should I use Next js?</h3>,
    <p>Next.js offers many features, such as static export, preview mode, initial rendering, fast compilation, and automatic building size optimization. In my opinion, the current version of Next.js is what React has been missing for a long time. Next, JS includes all the features you’ll need to build an app. Next.js is a very popular framework for making hybrid web applications.</p>,

]
},
{
    id:3,
    slug:"A-New-JavaScript",
    discription: [
        <h2>Bun: A New JavaScript Runtime that Replaces Node.js</h2>,
        <h3>What is a JavaScript runtime?</h3>,
        <p>A JavaScript runtime is a software environment that executes JavaScript code. JavaScript is a programming language that was originally designed for creating dynamic web pages in browsers. However, JavaScript can also be used for other purposes, such as server-side programming, desktop applications, mobile apps, and even games.</p>,
        <p>To run JavaScript code outside of browsers, you need a JavaScript runtime that can interpret and execute the code. A JavaScript runtime typically consists of two main components: a JavaScript engine and a set of APIs.</p>,
        <ul>
            <li>A JavaScript engine is a program that parses, compiles, and executes JavaScript code. Different JavaScript engines have different performance and features. Some of the most popular JavaScript engines are V8 (used by Chrome and Node.js), SpiderMonkey (used by Firefox), and JavaScriptCore (used by Safari and Bun).</li>
            <li>A set of APIs are functions and objects that provide access to various features and functionalities of the system, such as file system, network, timers, events, etc. Different JavaScript runtimes have different APIs. For example, browsers have APIs for manipulating the DOM (Document Object Model), making AJAX (Asynchronous JavaScript and XML) requests, using Web Storage, etc. Node.js has APIs for creating servers, working with streams, using buffers, etc.</li>
        </ul>,
        <h2>What is Bun?</h2>,
        <p>Bun is a new JavaScript runtime that claims to be faster, simpler, and more modern than Node.js. Bun was created by Samuel Giddins, a software engineer who works at Apple. Bun was released in February 2023 as an open source project on GitHub.</p>,
    ]
},
{
    id:4,
    sulg:"Drizzle-vs-Prisma",
    discription:[
        <h2>Drizzle vs Prisma: Which TypeScript ORM is Faster, Simpler, and More Flexible in 2023?</h2>,
        <h3>Introduction</h3>,
        <p>If you are a web developer who works with SQL databases, you might have heard of TypeScript ORM tools. These are libraries that allow you to write SQL queries in a type-safe and expressive way using TypeScript, a programming language that adds types to JavaScript. TypeScript ORM tools can help you simplify your code, prevent errors, and improve your productivity.</p>,
        <p>But which TypeScript ORM tool should you use in 2023? There are many options available, but two of the most popular ones are Drizzle and Prisma. Drizzle and Prisma are both modern and powerful tools that let you work with SQL databases in a fluent and intuitive way. However, they have some differences in their design, features, and performance that might make one of them more suitable for your needs than the other.</p>,
        <p>In this blog post, we will compare Drizzle and Prisma in terms of their features, performance, compatibility, simplicity, flexibility, and future prospects. We will also share our personal opinion and experience with each tool and give you some tips and best practices for using them. By the end of this blog post, you will have a clear answer to the question: Which TypeScript ORM tool is faster, simpler, and more flexible in 2023? Read on to find out!</p>,
    ]
},
{
    id:5,
    sulg:"blockchain-technology",
    discription:[
        <h2>Blockchain Explained: The History, Concepts, and Features of Blockchain Technology</h2>,
        <p>Blockchain is a technology that allows data to be stored and transferred in a secure, decentralized, and transparent way. Blockchain can be used for various purposes, such as cryptocurrencies, NFTs, smart contracts, and more. This blog post will explain the history, concepts, and features of blockchain technology.</p>,
        <h3>Introduction</h3>,
        <p>Blockchain is a term that refers to a system of storing and transferring data using blocks that are linked together by cryptographic hashes. The term blockchain was coined by Satoshi Nakamoto, the mysterious creator of Bitcoin, the first and most famous cryptocurrency that uses blockchain technology.</p>,
        <p>The main purpose and goal of this blog post is to educate you on the basics of blockchain technology. You will learn about the origin and evolution of blockchain technology, the basic concepts and principles that underlie it, and the main features and advantages that it offers over traditional methods of data storage and transfer.</p>,
        <p>By the end of this blog post, you will have a better understanding of what blockchain is, how it works, and why it is important in 2023 and beyond.</p>,        
        
    ]
},
]

import Link from "next/link"
export default function BLOG({params}:{params: {slug:String } }  ){
    const selectBlog = BlogsData.filter((item)=> item.slug === params.slug
    )
    
    return(
      

    <main>
<section className="Sub-header">
<nav>
<Link href="/" className="logo">Xplore
</Link>
<div className="nav-links" id="navLinks">
{/* <!-- reposnive bar open and close --> */}
<ul>
<li><Link href={'/'}>Home</Link></li>
<li><Link href={'./course'}>Course</Link></li>
<li><Link href='./blog'>Blog</Link></li>
<li><Link href='./about'>About</Link></li>
<li><Link href='./contact'>Contact</Link></li>
</ul>
</div>
{/* <!-- reposnive bar open and close --> */}
</nav>
<h1>Our Post</h1>
</section>

{/* <!-- Blog Page Section Start --> */}

<section className="blog-content">
<div className="row">
<div className="blog-left">
<h2>Our Certificate & Online Program</h2>
<h5>Aug 1, 2021</h5>
<img src="img/post.png" alt=""/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
<br/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
facilis?</p>
<br/>
<div>{selectBlog[0]?.discription}</div>
<div className="comment-box">
<h3>Leave a Comment</h3>
<form className="comment-form">
<input type="text" placeholder="Enter Name" required/>
<input type="email" placeholder="Enter Email" required/>
<textarea rows ={5} placeholder="Your Comment"></textarea>
<button type="submit" className="hero_btn btn">POST COMMENT</button>
</form>
</div>
</div>

<div className="blog-right">
<h3>Post Categories</h3>
<div>
<span>Business Analytics</span>
<span>12</span>
</div>
<div>
<span>Machine Learning</span>
<span>29</span>
</div>
<div>
<span>Computer Science</span>
<span>15</span>
</div>
<div>
<span>Data Analytics</span>
<span>22</span>
</div>
<div>
<span>Full Stack</span>
<span>20</span>
</div>
</div>
</div>
</section>

{/* <!-- Blog Page Section end -->
<!-- Footer Section start --> */}
<section className="footer">
<hr/>
<h4>About Us</h4>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
<br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
dolorem.
</p>

<div className="icons">
<i className="fab fa-facebook-f"></i>
<i className="fab fa-instagram"></i>
<i className="fab fa-twitter"></i>
<i className="fab fa-linkedin"></i>
</div>
<p>Made with <i className="fas fa-heart"></i> by <a href="#">Sagar Developer</a></p>
<p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
</section>
{/* <!-- Footer Section end --> */}

</main>

    )
}