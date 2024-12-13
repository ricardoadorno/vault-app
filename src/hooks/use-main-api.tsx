import ContentService from '@/services/content-service';

export default function useMainApi() {

    return {
        contentService: () => new ContentService(),
    };
}
