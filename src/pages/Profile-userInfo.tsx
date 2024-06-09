import AnimationPage from '@/components/AnimationPage';
import maxPhoto from '../assets/people.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';

export default function ProfileUserInfo() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <AnimationPage>
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarImage className="object-cover" src={currentUser?.photoURL} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold">{currentUser?.username}</h1>
            <p className="text-gray-400">Pekalongan, Indonesia</p>
          </div>
        </div>
        <div>
          {/* <Form /> */}
        </div>
      </div>
    </AnimationPage>
  );
}

const FormFields = ({
  label = '',
  value = '',
  id,
  type = 'text',
}: {
  label: string;
  value: string;
  id: string;
  type?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        className="w-full rounded-lg bg-[#FBFBFB] px-3 py-3 text-gray-500 placeholder:text-black"
      />
    </div>
  );
};

const Form = () => {
  return (
    <form>
      <section className="grid grid-cols-2 gap-10">
        <div className="space-y-5">
          <FormFields label="Username" value="Sara Tencredi" id="username" type="text" />
          <FormFields label="Email" value="saracredi@gmail.com" id="email" type="text" />
        </div>
        <div className="space-y-5">
          <FormFields label="Lokasi" value="Pekalongan, Indonesia" id="location" type="text" />
          <FormFields label="Foto Profil" id="photo" type="file" value={''} />
        </div>
      </section>
      <div className="py-6">
        <Button variant="update" size="xl">
          Update
        </Button>
      </div>
    </form>
  );
};
