
import { Link } from "react-router-dom";
import { useLocale } from "@/context/LocaleContext";

const Footer = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/80 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent neuro-gradient mr-2">D</span>
              <span className="text-lg font-semibold">diz.space</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-gray-500 hover:text-primary">{t('footer.features')}</Link></li>
              <li><Link to="/pricing" className="text-gray-500 hover:text-primary">{t('footer.pricing')}</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-primary">{t('footer.dashboard')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.changelog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.documentation')}</Link></li>
              <li><Link to="/community" className="text-gray-500 hover:text-primary">{t('footer.community')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.tutorials')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.blog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.careers')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary">{t('footer.termsOfService')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
