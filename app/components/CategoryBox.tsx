'use client'

import {useCallback} from 'react'
import {useRouter , useSearchParams} from 'next/navigation'

import qs from 'query-string'
import {IconType} from 'react-icons';

interface CategoryBoxprops {
    icon:IconType;
    label:string;
    selected?:boolean;
}

const CategoryBox:React.FC<CategoryBoxprops> = ({icon:Icon,label,selected}) => {

  const params = useSearchParams();
  const router = useRouter();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, { skipNull: true });

    router.push(url);
  }, [label, router, params]);
  


    return ( 
        <div
           onClick ={handleClick}
           className={`
              flex
              flex-col
              items-center
              justify-center
              p-3
              gap-2
              border-b-2
              hover:text-neutral-800
              cursor-pointer
              transition
              ${selected ? 'border-b-neutral-800' : 'border-transparent'}
              ${selected ? 'text-neutral-800' : 'text-neutral-500'}
              `}>
            <Icon size={26} />
            <div className='font-medium text-sm'>{label}</div>
        </div>
     );
}
 
export default CategoryBox;