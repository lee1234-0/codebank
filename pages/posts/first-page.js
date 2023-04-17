import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>My name</h2>
            <p>Lee Seo Jin</p>

            <h2>My hobby</h2>
            <ul>
                <li>rapping</li>
                <li>basketball</li>
                <li>shopping</li>
            </ul>
            <h2>My instagram</h2>
            <a href="https://www.instagram.com/dltjwl_s.jin/">@dltjwl_s.jin</a>
            <h2>Assignment0.3</h2>
            <a href="http://localhost:3000/index.html">bouncing ball</a>
            <br />
            <br />
            <br />
            <br />
            <Link href="/">Back to home</Link>
        </div>
        
    )
}
