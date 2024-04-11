import Link from "next/link";

export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link href="/" prefetch={false}>Home</Link></li>
                    <li><Link href="/dog_list" prefetch={false}>Dog List</Link></li>
                </ul>
            </nav>
        </>
    )
}