#ArtisApp
#--
docker build -t velorafront . &&

docker tag velorafront us-central1-docker.pkg.dev/velora-room/velora-docker-repo/velorafront &&

docker push us-central1-docker.pkg.dev/velora-room/velora-docker-repo/velorafront &&

gcloud run deploy velorafront --region us-central1 --allow-unauthenticated --image us-central1-docker.pkg.dev/velora-room/velora-docker-repo/velorafront
#--
#LandingApp
#--
#docker build -t veloralandingapp -f Dockerfile.Landing . &&

#docker tag veloralandingapp us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloralandingapp &&

#docker push us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloralandingapp &&

#gcloud run deploy veloralandingapp --region us-central1 --allow-unauthenticated --image us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloralandingapp
#--
#ClientApp
#--
#docker build -t veloraclientapp -f Dockerfile.Client . &&

#docker tag veloraclientapp us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloraclientapp &&

#docker push us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloraclientapp &&

#gcloud run deploy veloraclientapp --region us-central1 --allow-unauthenticated --image us-central1-docker.pkg.dev/velora-room/velora-docker-repo/veloraclientapp
#--