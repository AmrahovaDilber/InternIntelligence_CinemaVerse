import { useEffect, useState } from "react";
import { fetchPersonSocialMedias } from "../../api";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function PersonSocialMedias({ id }) {
  const [socialMedia, setSocialMedia] = useState({});

  useEffect(() => {
    const fetchSocialMedias = async () => {
      const data = await fetchPersonSocialMedias(id);
      setSocialMedia(data || {}); 
    };
    fetchSocialMedias();
  }, [id]);


  const platforms = [
    { key: "facebook_id", name: "Facebook", icon: <FaFacebook />, baseUrl: "https://facebook.com/" },
    { key: "instagram_id", name: "Instagram", icon: <AiFillInstagram />, baseUrl: "https://instagram.com/" },
    { key: "twitter_id", name: "Twitter", icon: <FaTwitter />, baseUrl: "https://twitter.com/" },
    { key: "youtube_id", name: "YouTube", icon: <FaYoutube />, baseUrl: "https://youtube.com/channel/" },
    { key: "tiktok_id", name: "TikTok", icon: <AiFillTikTok />, baseUrl: "https://www.tiktok.com/@" }
  ];

  return (
    <div className="py-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Social Media Links</h2>
      <div className="flex flex-wrap gap-4">
        {platforms.map(
          (platform) =>
            socialMedia[platform.key] && (
              <a
                key={platform.key}
                href={`${platform.baseUrl}${socialMedia[platform.key]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white shadow-md rounded-lg p-3 hover:bg-blue-100 transition"
              >
                <span className="text-blue-700 text-xl mr-2">{platform.icon}</span>
                <span className="text-blue-700 font-semibold">{platform.name}</span>
              </a>
            )
        )}
      </div>
      {!platforms.some((platform) => socialMedia[platform.key]) && (
        <p className="text-gray-500">No social media links available.</p>
      )}
    </div>
  );
}
