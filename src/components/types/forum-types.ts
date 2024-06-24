export interface Comment {
    id_comment: string;
    id_forum: string;
    comment_content: string;
    pinned: boolean;
    created_at: string;
    user: {
      email: string;
      photoURL: string;
      uid: string;
      username: string;
    };
  }
  
  export interface Forum {
    author: {
      email: string;
      photoURL: string;
      uid: string;
      username: string;
    };
    comments: Comment[];
    content: string;
    created_at: string;
    id_forum: string;
    id_tags: string | null;
    image: string;
    update_at: string;
  }