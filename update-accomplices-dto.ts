enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHERS = 'OTHERS'
}

type RelatedHeroType = {
  id: number;
  name: String;
  gender: GenderEnum;
  dateOfBirth: Date;
  filmStatus: Boolean;
}

export class UpdateAccomplicesDTO {
  heroId: number;
  relatedHero: Array<RelatedHeroType>;
  isEnemy?: boolean;
}

/**
 * Explanation and the way api should bt implemented
 * 
 * 1. API endpoint Name - api/hero/updateAccomplices
 * 2. API endpoint Method - PATCH
 * 3. Request Body must contain heroId instead in path as it would be more secure
 * 4. With the help of heroId and each relatedHeroId in the `hero_relation` table find the relation check if isEnemy is false as we are updating only the related accomplices
 * 5. If the current relatedHeroId is not present in the database skip further processing and move on to another relatedHero
 * 6. If relatedHero found update the respective hero details in the Hero table, fetched from requestBody.
 * 7. Lastly send success message in response with error code 204.
 */
