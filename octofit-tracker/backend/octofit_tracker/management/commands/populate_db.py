from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.db import connection

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User(name='Spider-Man', email='spiderman@marvel.com', team='Marvel'),
            User(name='Iron Man', email='ironman@marvel.com', team='Marvel'),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team='DC'),
            User(name='Batman', email='batman@dc.com', team='DC'),
        ]
        User.objects.bulk_create(users)

        # Create activities
        activities = [
            Activity(user='Spider-Man', activity_type='Running', duration=30),
            Activity(user='Iron Man', activity_type='Cycling', duration=45),
            Activity(user='Wonder Woman', activity_type='Swimming', duration=25),
            Activity(user='Batman', activity_type='Yoga', duration=40),
        ]
        Activity.objects.bulk_create(activities)

        # Create workouts
        workouts = [
            Workout(name='Cardio Blast', description='High intensity cardio workout', difficulty='Hard'),
            Workout(name='Strength Builder', description='Full body strength training', difficulty='Medium'),
        ]
        Workout.objects.bulk_create(workouts)

        # Create leaderboard
        Leaderboard.objects.create(team='Marvel', points=100)
        Leaderboard.objects.create(team='DC', points=90)


        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data.'))
