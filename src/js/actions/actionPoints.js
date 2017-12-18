export const SET_POINTS = "set_points";
export const CALCULATE_POINTS = "calculate_points";
export const RESET_POINTS = "reset_points";

// Calculate mastery points available based on char level and renown level
function calculateMasteryPoints(level, renown) {
  let points = 0;
  if (level > 10) {
    if (level > 20) {
      points = level - 15;
    } else {
      if (level > 18) {
        points = 5;
      } else if (level > 16) {
        points = 4;
      } else if (level > 14) {
        points = 3;
      } else if (level > 12) {
        points = 2;
      } else {
        points = 1;
      }
    }
    switch (renown) {
      case 40:
        points = points + 1;
        break;
      case 50:
        points = points + 2;
        break;
      case 60:
        points = points + 3;
        break;
      case 70:
        points = points + 4;
        break;
      default:
        break;
    }
  }
  // return mastery points
  return points;
}

export function setPoints(points) {

  return {
    type: SET_POINTS,
    payload: Number(points)
  };
}

export function calculatePoints(level, renown) {
  
  return {
    type: CALCULATE_POINTS,
    payload: calculateMasteryPoints(level, renown)
  };
}

export function resetPoints() {
  
  return {
    type: RESET_POINTS
  };
}