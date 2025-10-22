import React, { useState, useCallback } from 'react';
import { PROFILE_DATA } from './constants';
import type { ProfileData } from './types';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import SocialLinks from './components/SocialLinks';
import { generateBio } from './services/geminiService';

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2l2.35 7.16h7.65l-6.18 4.44 2.36 7.16-6.18-4.44-6.18 4.44 2.36-7.16-6.18-4.44h7.65z" />
  </svg>
);

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>(PROFILE_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateBio = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newBio = await generateBio(profile.name);
      setProfile((prevProfile) => ({ ...prevProfile, bio: newBio }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [profile.name]);

  return (
    <div className="min-h-screen font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <header className="text-center">
          <Profile
            avatarUrl={profile.avatarUrl}
            name={profile.name}
            handle={profile.handle}
          />
        </header>
        <main>
          <div className="text-center mb-6 relative">
            <p className="text-slate-600 px-4">{profile.bio}</p>
            <div className="mt-4 flex justify-center">
               <button
                  onClick={handleGenerateBio}
                  disabled={isLoading}
                  className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold py-1.5 px-3 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isLoading ? (
                    'Generating...'
                  ) : (
                    <>
                      <SparklesIcon className="mr-2"/>
                      Generate Bio with AI
                    </>
                  )}
               </button>
            </div>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </div>

          <div className="space-y-4">
            {profile.links.map((link) => (
              <LinkButton key={link.title} href={link.url}>
                {link.title}
              </LinkButton>
            ))}
          </div>

          <SocialLinks links={profile.socialLinks} />
        </main>

        <footer className="text-center mt-10">
          <p className="text-sm text-slate-500">My Link Hub</p>
        </footer>
      </div>
    </div>
  );
};

export default App;