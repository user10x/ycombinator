
import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface StartupCardType {
    _id: string;
    title: string;
    number_of_views: number;
    author: {
        name: string;
        _id: string;
    }
    createdAt: string;
    name: string;
    description: string;
    image: string;
    category: string;

}

const StartupCardType = ({post}: {post: StartupCardType}) => {

    const {createdAt, _id, author :{_id: authorId, name}, title, number_of_views, description, image, category} = post;

    console.log(createdAt);

    console.log(_id);

    console.log(authorId);
    console.log(title);
    console.log(name);
    console.log(number_of_views);




    return (
        <li className="startup-card p-4 rounded-xl border bg-white shadow-sm flex flex-col gap-4">
            {/* Top row: Date + Views */}
            <div className="flex justify-between items-center text-sm text-gray-500">
                <p>{formatDate(createdAt)}</p>
                <div className="flex items-center gap-2">
                    <EyeIcon className="size-5 text-primary" />
                    <span>{number_of_views}</span>
                </div>
            </div>

            {/* Middle section: Author, Title, Avatar */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 overflow-hidden">
                    <Link href={`/user/${authorId}`}>
                        <p className="truncate text-sm font-medium text-gray-700 hover:underline">{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="font-bold text-lg truncate hover:text-primary">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image
                        alt="profile"
                        src="https://placehold.co/48x48"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                </Link>
            </div>

            {/* Description + Image */}
            <Link href={`/startup/${_id}`} className="flex flex-col gap-2">
                <p className="text-gray-600 line-clamp-3 text-sm">{description}</p>
                <img
                    src={image}
                    alt="startup"
                    className="w-full h-48 object-cover rounded-md"
                />
            </Link>

            {/* Bottom: Category + Button */}
            <div className="flex justify-between items-center mt-2">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-sm font-medium text-primary hover:underline">
                        {category}
                    </p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>

    )
}

export default StartupCardType;