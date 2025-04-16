
import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";


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


}

const StartupCardType = ({post}: {post: StartupCardType}) => {

    const {createdAt, _id, author :{_id: authorId, name}, title, number_of_views} = post;

    console.log(createdAt);

    console.log(_id);

    console.log(authorId);
    console.log(title);
    console.log(name);
    console.log(number_of_views);




    return (
        <li className="startup-card">
            <div className="justify-between">
                <p className="startup_card_date">
                    { formatDate(createdAt) }
                </p>
                <div className="flex gap-5 justify-end">
                    <EyeIcon className="size-6 text-primary"/>
                    <span className="text-sm">{number_of_views}</span>
                </div>
            </div>
            <div className="justify-between mt-5 gap-5">
                <Link href={`user/${authorId}`}>
                    <p className="flex-1/2 line-clamp-1">{name}</p>
                </Link>
                <Link href={`startup/${_id}`}>
                    <h3 className="font-bold line-clamp-1">{title}</h3>
                </Link>

            </div>
        </li>
    )
}

export default StartupCardType;