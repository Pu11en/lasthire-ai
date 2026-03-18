# Vercel Debug Skill

Debug and manage your Lasthire.ai Vercel deployment.

## Deployment Info

**Project:** lasthire-ai
**URL:** https://lasthire-ai.vercel.app
**Status:** ✅ Live
**Last Deploy:** Just now

## Commands

### Check Status
```bash
vercel projects list --token $VERCEL_TOKEN
```

### View Deployments
```bash
vercel ls --token $VERCEL_TOKEN
```

### Check Logs
```bash
vercel logs [project-name] --token $VERCEL_TOKEN
```

### Redeploy
```bash
cd lasthire-ai
git add . && git commit -m "fix: [description]" && git push origin main
```

### Environment Variables
Set in Vercel dashboard:
- Settings → Environment Variables

### Common Issues

| Issue | Solution |
|-------|----------|
| Build failed | Check build logs in Vercel dashboard |
| 404 on page | Check routing in Next.js |
| API not working | Check API routes exist |
| Static pages broken | Run `npm run build` locally first |

## API

**Token:** Use the token from user's input
**Project ID:** prj_zAqrGOLnrEswKMoYzaXi6FwqAnD9

## Links

- Dashboard: https://vercel.com/a55ets-projects/lasthire-ai
- Settings: https://vercel.com/a55ets-projects/lasthire-ai/settings
- Deployments: https://vercel.com/a55ets-projects/lasthire-ai
