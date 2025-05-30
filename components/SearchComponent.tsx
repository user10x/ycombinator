import React from 'react';
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search} from 'lucide-react';

const SearchForm = ({ query }: { query?: string }) => {

    return (
        <Form scroll={false} action="/" className="search-form">
            <input type="text" name="query" defaultValue={query} className="search-input" placeholder="Search Startups" />
            <div className="flex gap-2">
                {query && <SearchFormReset/>}
                <button type='submit' className='search-btn'>
                    <Search/>
                </button>
            </div>
        </Form>
    )
}

export default SearchForm;