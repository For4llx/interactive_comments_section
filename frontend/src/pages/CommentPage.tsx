import { QueryClient, QueryClientProvider } from 'react-query';
import CommentList from '../containers/CommentList';
import AppContainer from '../components/AppContainer';

const queryClient = new QueryClient();

function CommentPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <AppContainer>
                <CommentList />
            </AppContainer>
        </QueryClientProvider>
    )
}

export default CommentPage
