import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://api-docs.justlogin.com',
  // base: '',
  integrations: [
    starlight({
      title: 'JustLogin API',
      head: [
        {
          tag: 'script',
          content: `
            (function() {
              var PASSWORD = '64765330';
              var SESSION_KEY = 'jl_docs_auth';

              if (sessionStorage.getItem(SESSION_KEY) === 'true') return;

              var overlay = document.createElement('div');
              overlay.id = 'auth-overlay';
              overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#0f172a;display:flex;align-items:center;justify-content:center;z-index:99999;font-family:sans-serif;';

              overlay.innerHTML = '<div style="background:#1e293b;padding:2rem;border-radius:0.75rem;width:100%;max-width:360px;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,0.5);">'
                + '<h2 style="color:#f1f5f9;font-size:1.25rem;margin:0 0 0.5rem;">JustLogin API Docs</h2>'
                + '<p style="color:#94a3b8;font-size:0.875rem;margin:0 0 1.5rem;">Enter the password to continue</p>'
                + '<input id="auth-input" type="password" placeholder="Password" style="width:100%;padding:0.625rem 0.75rem;border-radius:0.5rem;border:1px solid #334155;background:#0f172a;color:#f1f5f9;font-size:1rem;box-sizing:border-box;margin-bottom:0.5rem;outline:none;" />'
                + '<p id="auth-error" style="color:#f87171;font-size:0.8rem;min-height:1.25rem;margin:0 0 0.75rem;"></p>'
                + '<button id="auth-btn" style="width:100%;padding:0.625rem;background:#6366f1;color:#fff;border:none;border-radius:0.5rem;font-size:1rem;cursor:pointer;">Continue</button>'
                + '</div>';

              document.documentElement.appendChild(overlay);

              function attempt() {
                if (document.getElementById('auth-input').value === PASSWORD) {
                  sessionStorage.setItem(SESSION_KEY, 'true');
                  document.getElementById('auth-overlay').remove();
                } else {
                  document.getElementById('auth-error').textContent = 'Incorrect password. Please try again.';
                  document.getElementById('auth-input').value = '';
                  document.getElementById('auth-input').focus();
                }
              }

              document.addEventListener('DOMContentLoaded', function() {
                document.getElementById('auth-btn').addEventListener('click', attempt);
                document.getElementById('auth-input').addEventListener('keydown', function(e) {
                  if (e.key === 'Enter') attempt();
                });
                document.getElementById('auth-input').focus();
              });
            })();
          `,
        },
      ],
      logo: {
        src: '/src/assets/img/plane.png',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Authentication', link: '/getting-started/authentication/' },
            { label: 'Paging', link: '/getting-started/paging/' },
            { label: 'Errors', link: '/getting-started/errors/' },
            { label: 'API Environments', link: '/getting-started/environments/' },
          ],
        },
        {
          label: 'Employee API',
          items: [
            { label: 'Introduction', link: '/api/employee/introduction/' },
            { label: 'List Employees', link: '/api/employee/list-employees/' },
            { label: 'Get Employee', link: '/api/employee/get-employee/' },
          ],
        },
        {
          label: 'Payroll API',
          items: [
            { label: 'Introduction', link: '/api/payroll/introduction/' },
            { label: 'Get Pay Information', link: '/api/payroll/pay-information/' },
            { label: 'Get Bank Information', link: '/api/payroll/bank-information/' },
          ],
        },
        {
          label: 'Leave API',
          items: [
            { label: 'Introduction', link: '/api/leave/introduction/' },
            { label: 'List Leave Types', link: '/api/leave/list-leave-types/' },
            { label: 'Get Leave Information', link: '/api/leave/leave-information/' },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
