enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHERS = 'OTHERS'
}

type RelatedMarvelCharacterType = {
  id: number;
  name: String;
  gender: GenderEnum;
  dateOfBirth: Date;
  filmStatus: Boolean;
}

export class UpdateAccomplicesDTO {
  marvelCharacterId: number;
  relatedMarvelCharacter: Array<RelatedMarvelCharacterType>;
  isEnemy?: boolean;
}

/**
 * Explanation and the way api should bt implemented
 * 
 * 1. API endpoint Name - api/marvelCharacter/updateAccomplices
 * 2. API endpoint Method - PATCH
 * 3. Request Body must contain marvelCharacterId instead in path as it would be more secure
 * 4. With the help of marvelCharacterId and each relatedMarvelCharacterId in the `marvel_character_relation` table find the relation check if isEnemy is false as we are updating only the related accomplices
 * 5. If the current relatedMarvelCharacterId is not present in the database skip further processing and move on to another relatedMarvelCharacter
 * 6. If relatedMarvelCharacter found update the respective character details in the marvel_character table, fetched from requestBody.
 * 7. Lastly send success message in response with error code 204.
 */
