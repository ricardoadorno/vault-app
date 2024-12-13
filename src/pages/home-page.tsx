import { Button } from '@/components/ui/button';
import useMainApi from '@/hooks/use-main-api';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {
    // const { contentService } = useMainApi()

    // const { data: content } = useQuery({
    //     queryKey: ['content'],
    //     queryFn: () => contentService().getContent(),
    // })

    return (
        <div className='container mx-auto min-h-screen flex items-center justify-center bg-background'>
            <Button>Click me</Button>
        </div>
    )
}
