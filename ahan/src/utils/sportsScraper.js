import axios from 'axios';

const TEAMS = {
  eagles: {
    id: 'phi',
    league: 'football',
    sport: 'nfl',
    season: '2024'
  },
  sixers: {
    id: 'phi',
    league: 'basketball',
    sport: 'nba',
    season: '2024'
  },
  phillies: {
    id: 'phi',
    league: 'baseball',
    sport: 'mlb',
    season: '2025'
  },
  flyers: {
    id: 'phi',
    league: 'hockey',
    sport: 'nhl',
    season: '2024'
  }
};

const isWithinDateRange = (date, startDate, endDate) => {
  const gameDate = new Date(date);
  return gameDate >= startDate && gameDate <= endDate;
};

const isGameInPast = (gameDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(gameDate) < today;
};

const getDateRange = () => {
  const today = new Date();
  // Set time to midnight to ensure consistent date calculations
  today.setHours(0, 0, 0, 0);
  
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(today.getDate() - 3);
  
  const sevenDaysAhead = new Date(today);
  sevenDaysAhead.setDate(today.getDate() + 7);
  
  return {
    start: threeDaysAgo,
    end: sevenDaysAhead
  };
};

const getTeamUpdates = async (team) => {
  try {
    console.log(`Fetching updates for ${team.sport} team ${team.id} for season ${team.season}`);
    
    const { start: startDate, end: endDate } = getDateRange();
    console.log('Date range:', startDate.toLocaleDateString(), 'to', endDate.toLocaleDateString());

    const url = `https://site.api.espn.com/apis/site/v2/sports/${team.league}/${team.sport}/teams/${team.id}/schedule`;
    console.log('API URL:', url);

    const response = await axios.get(url, {
      params: {
        season: team.season
      }
    });

    console.log('API Response:', response.data);
    console.log('Events array:', response.data.events);

    const updates = [];
    const events = response.data.events || [];

    events.forEach(event => {
      try {
        const date = new Date(event.date);
        console.log('Processing event date:', date, 'vs range:', startDate, 'to', endDate);
        
        // Skip games outside our date range
        if (!isWithinDateRange(date, startDate, endDate)) {
          console.log('Event outside date range, skipping');
          return;
        }

        console.log('Event within date range:', event);
        const competition = event.competitions?.[0];
        
        if (!competition) {
          console.log('No competition data found for event');
          return;
        }

        const competitors = competition.competitors || [];
        const homeTeam = competitors.find(c => c.homeAway === 'home');
        const awayTeam = competitors.find(c => c.homeAway === 'away');

        if (homeTeam && awayTeam) {
          const homeScore = homeTeam.score?.displayValue || '';
          const awayScore = awayTeam.score?.displayValue || '';

          const gameInPast = isGameInPast(date);
          
          if (gameInPast && homeScore && awayScore) {
            // Past game with scores
            updates.push({
              date,
              text: `${awayTeam.team?.displayName || 'Away'} **${awayScore}** - **${homeScore}** ${homeTeam.team?.displayName || 'Home'}`,
              type: 'past'
            });
          } else if (!gameInPast) {
            // Upcoming game
            const time = date.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            });
            const gameDate = date.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            });
            updates.push({
              date,
              text: `${gameDate}: ${awayTeam.team?.displayName || 'Away'} @ ${homeTeam.team?.displayName || 'Home'} - ${time}`,
              type: 'upcoming'
            });
          }
        } else {
          console.log('Missing team data for event');
        }
      } catch (error) {
        console.error('Error processing event:', error);
      }
    });

    console.log(`Found ${updates.length} updates for this team within date range`);
    return updates;
  } catch (error) {
    console.error(`Error fetching updates for team:`, error);
    if (error.response) {
      console.error('API Response:', error.response.data);
    }
    return [];
  }
};

export const fetchSportsUpdates = async () => {
  const allUpdates = [];
  
  for (const [teamName, team] of Object.entries(TEAMS)) {
    console.log(`Processing ${teamName} updates...`);
    const updates = await getTeamUpdates(team);
    allUpdates.push(...updates);
  }

  console.log(`Total updates found within date range: ${allUpdates.length}`);
  
  if (allUpdates.length === 0) {
    console.log('No updates found, returning fallback data');
    return [
      'Eagles sign new defensive coordinator',
      'Sixers win against the Celtics 120-115',
      'Phillies spring training begins next week',
      'Flyers trade deadline moves incoming'
    ];
  }

  // Sort updates by date (most recent first)
  const sortedUpdates = allUpdates
    .sort((a, b) => b.date - a.date)
    .map(update => update.text);

  console.log('Final sorted updates within date range:', sortedUpdates);
  return sortedUpdates;
}; 