# Reference

## accounts

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">create</a>({ ...params }) -> DevRev.AccountsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an account, which is a record representing a customer or an
organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.create({
    displayName: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">delete</a>({ ...params }) -> DevRev.AccountsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.delete({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">export</a>({ ...params }) -> DevRev.AccountsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.export({
    createdDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    createdDateBefore: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateBefore: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsExportQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.AccountsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">get</a>({ ...params }) -> DevRev.AccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an account's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.get({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.AccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an account's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getPost({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">list</a>({ ...params }) -> DevRev.AccountsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.list({
    createdDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    createdDateBefore: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateBefore: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">listPost</a>({ ...params }) -> DevRev.AccountsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">update</a>({ ...params }) -> DevRev.AccountsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an account's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.update({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## articles

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">count</a>({ ...params }) -> DevRev.ArticlesCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get count of articles matching given filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesCountQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">countPost</a>({ ...params }) -> DevRev.ArticlesCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get count of articles matching given filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.countPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">create</a>({ ...params }) -> DevRev.ArticlesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Article is an object which can contain a URL or artifacts in the
resource. It also contains the data regarding the owner, author, status
and published date of the object. This call creates an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.create({
    appliesToParts: ["PROD-12345"],
    ownedBy: ["DEVU-12345"],
    resource: {},
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">delete</a>({ ...params }) -> DevRev.ArticlesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.delete({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">get</a>({ ...params }) -> DevRev.ArticlesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.get({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GetArticleQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ArticlesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.getPost({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">list</a>({ ...params }) -> DevRev.ArticlesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of articles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ListArticlesQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">listPost</a>({ ...params }) -> DevRev.ArticlesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of articles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">update</a>({ ...params }) -> DevRev.ArticlesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.update({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## artifacts

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">prepare</a>({ ...params }) -> DevRev.ArtifactsPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an artifact and generates an upload URL for its data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.prepare({
    fileName: "file_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsPrepareRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">versionsPrepare</a>({ ...params }) -> DevRev.ArtifactsVersionsPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Prepares a new version for an artifact, returning the URL and form data
to upload the updated file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.versionsPrepare({
    id: "ARTIFACT-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsVersionsPrepareRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## code-changes

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">create</a>({ ...params }) -> DevRev.CodeChangesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.create({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">delete</a>({ ...params }) -> DevRev.CodeChangesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">get</a>({ ...params }) -> DevRev.CodeChangesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">getPost</a>({ ...params }) -> DevRev.CodeChangesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">list</a>({ ...params }) -> DevRev.CodeChangesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists code change objects.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">listPost</a>({ ...params }) -> DevRev.CodeChangesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists code change objects.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">update</a>({ ...params }) -> DevRev.CodeChangesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## conversations

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">create</a>({ ...params }) -> DevRev.ConversationsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.create({
    type: "support",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">delete</a>({ ...params }) -> DevRev.ConversationsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the requested conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">export</a>({ ...params }) -> DevRev.ConversationsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of conversation items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.export({
    tagsV2Id: "TAG-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsExportQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.ConversationsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of conversation items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">get</a>({ ...params }) -> DevRev.ConversationsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested conversation's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ConversationsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested conversation's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">list</a>({ ...params }) -> DevRev.ConversationsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available conversations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.list({
    tagsV2Id: "TAG-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">listPost</a>({ ...params }) -> DevRev.ConversationsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available conversations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">update</a>({ ...params }) -> DevRev.ConversationsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the requested conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## dev-users

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">identitiesLink</a>({ ...params }) -> DevRev.DevUsersIdentitiesLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links an external/secondary identity to the Dev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.identitiesLink({
    devUser: "dev_user",
    id: "id",
    issuer: "issuer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersIdentitiesLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">identitiesUnlink</a>({ ...params }) -> DevRev.DevUsersIdentitiesUnlinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks an external/secondary identity from the Dev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.identitiesUnlink({
    devUser: "dev_user",
    issuer: "issuer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersIdentitiesUnlinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">selfUpdate</a>({ ...params }) -> DevRev.DevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.selfUpdate();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersSelfUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.DevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the user corresponding to the input Id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## engagements

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">count</a>({ ...params }) -> DevRev.EngagementsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsCountQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">countPost</a>({ ...params }) -> DevRev.EngagementsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.countPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">create</a>({ ...params }) -> DevRev.EngagementsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.create({
    members: ["DEVU-12345"],
    parent: "ACC-12345",
    scheduledDate: new Date("2023-01-01T12:00:00.000Z"),
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">delete</a>({ ...params }) -> DevRev.EngagementsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">get</a>({ ...params }) -> DevRev.EngagementsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">getPost</a>({ ...params }) -> DevRev.EngagementsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">list</a>({ ...params }) -> DevRev.EngagementsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">listPost</a>({ ...params }) -> DevRev.EngagementsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">update</a>({ ...params }) -> DevRev.EngagementsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## event-source

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">get</a>({ ...params }) -> DevRev.EventSourceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourcesGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">getPost</a>({ ...params }) -> DevRev.EventSourceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourceGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">scheduleEvent</a>({ ...params }) -> DevRev.EventSourcesScheduleEventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules an event to be published to the specified event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.scheduleEvent({
    eventType: "event_type",
    id: "id",
    payload: "payload",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourcesScheduleEventRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">deleteScheduledEvent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an event scheduled for the specified event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.deleteScheduledEvent({
    eventKey: "event_key",
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourcesDeleteScheduledEventRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">trackEventsPublish</a>({ ...params }) -> DevRev.TrackEventsPublishResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Allows publishing of events (example from plug widget).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.trackEventsPublish({
    eventsList: [
        {
            name: "name",
            payload: {
                key: "value",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TrackEventsPublishRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## groups

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">create</a>({ ...params }) -> DevRev.GroupsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new group. A group is a collection of users.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.create({
    description: "description",
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">get</a>({ ...params }) -> DevRev.GroupsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">getPost</a>({ ...params }) -> DevRev.GroupsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">list</a>({ ...params }) -> DevRev.GroupsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available groups.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">listPost</a>({ ...params }) -> DevRev.GroupsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available groups.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersAdd</a>({ ...params }) -> DevRev.GroupMembersAddResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a member to a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersAdd({
    group: "group",
    member: "DEVU-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersAddRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersList</a>({ ...params }) -> DevRev.GroupMembersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the members in a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersList({
    group: "group",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersListPost</a>({ ...params }) -> DevRev.GroupMembersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the members in a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersListPost({
    group: "group",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersRemove</a>({ ...params }) -> DevRev.GroupMembersRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a member from a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersRemove({
    group: "group",
    member: "DEVU-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersRemoveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">update</a>({ ...params }) -> DevRev.GroupsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the requested group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## links

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">create</a>({ ...params }) -> DevRev.LinksCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link between two objects to indicate a relationship.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.create({
    linkType: DevRev.LinkType.CustomLink,
    source: "string",
    target: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">delete</a>({ ...params }) -> DevRev.LinksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">get</a>({ ...params }) -> DevRev.LinksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested link's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.get({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">getPost</a>({ ...params }) -> DevRev.LinksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested link's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">list</a>({ ...params }) -> DevRev.LinksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available links.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.list({
    object: "object",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">listPost</a>({ ...params }) -> DevRev.LinksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available links.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.listPost({
    object: "object",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## slas

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">metricDefinitionsList</a>({ ...params }) -> DevRev.MetricDefinitionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists metric definitions matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.metricDefinitionsList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.MetricDefinitionsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">metricDefinitionsListPost</a>({ ...params }) -> DevRev.MetricDefinitionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists metric definitions matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.metricDefinitionsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.MetricDefinitionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">assign</a>({ ...params }) -> DevRev.SlasAssignResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns the SLA to a set of Rev organizations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.assign({
    revOrgs: ["REV-AbCdEfGh"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasAssignRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">create</a>({ ...params }) -> DevRev.SlasCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an SLA in draft status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">get</a>({ ...params }) -> DevRev.SlasGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">getPost</a>({ ...params }) -> DevRev.SlasGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">list</a>({ ...params }) -> DevRev.SlasListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists SLAs matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SlasListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists SLAs matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">transition</a>({ ...params }) -> DevRev.SlasTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes the status of an SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.transition({
    id: "id",
    status: DevRev.SlaStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">update</a>({ ...params }) -> DevRev.SlasUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a draft SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## product-usage

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">metricsDevrevIngest</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ingest endpoint for DevRev metrics data from clients.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.metricsDevrevIngest({
    metrics: [
        {
            accountRef: "account_ref",
            dataPoints: [
                {
                    timestamp: new Date("2023-01-01T12:00:00.000Z"),
                    value: 1.1,
                },
            ],
            name: "name",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.MetricsDataIngestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsCount</a>({ ...params }) -> DevRev.UomsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the number of Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsCount();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsCountQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsCountPost</a>({ ...params }) -> DevRev.UomsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the number of Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsCountPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsCreate</a>({ ...params }) -> DevRev.UomsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Unit of Measurement on a part.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsCreate({
    aggregationDetail: {
        aggregationType: DevRev.AggregationDetailAggregationType.Duration,
        uniqueDimension: "string",
    },
    description: "string",
    dimensions: ["string"],
    metricName: "string",
    name: "string",
    partId: "string",
    productId: "string",
    unit: {
        type: DevRev.UnitType.Boolean,
        name: "string",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsDelete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsDelete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsGet</a>({ ...params }) -> DevRev.UomsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsGet({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsGetPost</a>({ ...params }) -> DevRev.UomsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsGetPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsList</a>({ ...params }) -> DevRev.UomsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsListPost</a>({ ...params }) -> DevRev.UomsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsUpdate</a>({ ...params }) -> DevRev.UomsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsUpdate({
    aggregationType: DevRev.AggregationDetailAggregationType.Duration,
    description: "string",
    dimensions: {
        add: ["string"],
        remove: ["string"],
    },
    id: "string",
    isEnabled: true,
    name: "string",
    partId: "string",
    productId: "string",
    unit: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## schedules

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsCreate</a>({ ...params }) -> DevRev.OrgScheduleFragmentsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsCreate({
    from: new Date("2023-01-01T12:00:00.000Z"),
    intervals: [
        {
            from: new Date("2023-01-01T12:00:00.000Z"),
            name: "name",
        },
    ],
    name: "name",
    to: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsGet</a>({ ...params }) -> DevRev.OrgScheduleFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsGet({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsGetPost</a>({ ...params }) -> DevRev.OrgScheduleFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsTransition</a>({ ...params }) -> DevRev.OrgScheduleFragmentsTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes stage of an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsTransition({
    id: "id",
    status: DevRev.OrgScheduleFragmentStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">create</a>({ ...params }) -> DevRev.OrgSchedulesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization schedule with a default weekly organization
schedule and a list of organization schedule fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.create({
    name: "name",
    timezone: "timezone",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">get</a>({ ...params }) -> DevRev.OrgSchedulesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">getPost</a>({ ...params }) -> DevRev.OrgSchedulesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">list</a>({ ...params }) -> DevRev.OrgSchedulesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets list of organization schedules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">listPost</a>({ ...params }) -> DevRev.OrgSchedulesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets list of organization schedules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">setFuture</a>({ ...params }) -> DevRev.OrgSchedulesSetFutureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets next organization schedule fragment which must begin the day the
last existing fragment ends.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.setFuture({
    id: "id",
    orgScheduleFragmentId: "org_schedule_fragment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesSetFutureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">transition</a>({ ...params }) -> DevRev.OrgSchedulesTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes or archives an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.transition({
    id: "id",
    status: DevRev.OrgScheduleStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">update</a>({ ...params }) -> DevRev.OrgSchedulesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">fragmentsCreate</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.fragmentsCreate();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">fragmentsGet</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.fragmentsGet();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">fragmentsGetPost</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.fragmentsGetPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">fragmentsTransition</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.fragmentsTransition();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## parts

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">create</a>({ ...params }) -> DevRev.PartsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates new [part](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.create({
    type: "capability",
    artifacts: ["string"],
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    description: "string",
    name: "string",
    ownedBy: ["string"],
    parentPart: ["string"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">delete</a>({ ...params }) -> DevRev.PartsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [part](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.delete({
    id: "PROD-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">get</a>({ ...params }) -> DevRev.PartsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a [part's](https://devrev.ai/docs/product/parts) information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.get({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.PartsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a [part's](https://devrev.ai/docs/product/parts) information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">list</a>({ ...params }) -> DevRev.PartsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of [parts](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">listPost</a>({ ...params }) -> DevRev.PartsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of [parts](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">update</a>({ ...params }) -> DevRev.PartsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a [part's](https://devrev.ai/docs/product/parts) information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.update({
    type: "capability",
    value: {
        string: {
            key: "value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## QuestionAnswers

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">create</a>({ ...params }) -> DevRev.QuestionAnswersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.create({
    answer: "answer",
    appliesToParts: ["PROD-12345"],
    ownedBy: ["DEVU-12345"],
    question: "question",
    status: DevRev.QuestionAnswerStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">get</a>({ ...params }) -> DevRev.QuestionAnswersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GetQuestionAnswerQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">getPost</a>({ ...params }) -> DevRev.QuestionAnswersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">list</a>({ ...params }) -> DevRev.QuestionAnswersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of question-answers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ListQuestionAnswersQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.QuestionAnswersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of question-answers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">update</a>({ ...params }) -> DevRev.QuestionAnswersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## rev-orgs

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">create</a>({ ...params }) -> DevRev.RevOrgsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Rev organization in the authenticated user's Dev
organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.create({
    displayName: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">get</a>({ ...params }) -> DevRev.RevOrgsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the Rev organization's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.get({
    account: "ACC-12345",
    id: "REV-AbCdEfGh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">getPost</a>({ ...params }) -> DevRev.RevOrgsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the Rev organization's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.getPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">list</a>({ ...params }) -> DevRev.RevOrgsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the list of Rev organizations' information belonging to the
authenticated user's Dev Organization which the user is also authorized
to access.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.list({
    createdDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    createdDateBefore: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateBefore: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">listPost</a>({ ...params }) -> DevRev.RevOrgsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the list of Rev organizations' information belonging to the
authenticated user's Dev Organization which the user is also authorized
to access.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">update</a>({ ...params }) -> DevRev.RevOrgsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the Rev organization's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.update({
    id: "REV-AbCdEfGh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## rev-users

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">create</a>({ ...params }) -> DevRev.RevUsersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Rev user for a Rev organization. Rev user can be a customer
or a lead of an organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">delete</a>({ ...params }) -> DevRev.RevUsersDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a Rev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">get</a>({ ...params }) -> DevRev.RevUsersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Rev user of a Rev organization by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">getPost</a>({ ...params }) -> DevRev.RevUsersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Rev user of a Rev organization by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">linkRevUserToRevOrg</a>({ ...params }) -> DevRev.LinkRevUserToRevOrgResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a rev user to a rev org.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.linkRevUserToRevOrg();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinkRevUserToRevOrgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">list</a>({ ...params }) -> DevRev.RevUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all Rev Users belonging to the authenticated user's
Dev Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.list({
    createdDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    createdDateBefore: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateAfter: new Date("2023-01-01T12:00:00.000Z"),
    modifiedDateBefore: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.RevUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all Rev Users belonging to the authenticated user's
Dev Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">unlinkRevUserFromRevOrg</a>({ ...params }) -> DevRev.UnlinkRevUserFromRevOrgResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks a rev user from a rev org.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.unlinkRevUserFromRevOrg();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UnlinkRevUserFromRevOrgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.RevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Rev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## customization

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">aggregatedSchemaGet</a>({ ...params }) -> DevRev.AggregatedSchemaGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the aggregated schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.aggregatedSchemaGet({
    customSchemaFragmentIds: "string",
    leafType: "string",
    stockSchemaFragmentId: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AggregatedSchemaGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">aggregatedSchemaGetPost</a>({ ...params }) -> DevRev.AggregatedSchemaGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the aggregated schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.aggregatedSchemaGetPost({
    customSchemaFragmentIds: ["custom_schema_fragment_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AggregatedSchemaGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsGet</a>({ ...params }) -> DevRev.CustomSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsGet({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsGetPost</a>({ ...params }) -> DevRev.CustomSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsGetPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsList</a>({ ...params }) -> DevRev.CustomSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsListPost</a>({ ...params }) -> DevRev.CustomSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsSet</a>({ ...params }) -> DevRev.CustomSchemaFragmentsSetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a custom schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsSet({
    type: "app_fragment",
    conditions: [
        {
            string: {
                key: "value",
            },
        },
    ],
    deletedFields: ["string"],
    deprecated: true,
    description: "string",
    fields: [
        {
            fieldType: "array",
            value: {
                key: "value",
            },
        },
    ],
    isCustomLeafType: true,
    leafType: "string",
    app: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsSetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsGet</a>({ ...params }) -> DevRev.StockSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a stock schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsGet();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsGetPost</a>({ ...params }) -> DevRev.StockSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a stock schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsGetPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsList</a>({ ...params }) -> DevRev.StockSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists stock schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsListPost</a>({ ...params }) -> DevRev.StockSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists stock schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">subtypesList</a>({ ...params }) -> DevRev.SubtypesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists subtypes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.subtypesList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SubtypesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">subtypesListPost</a>({ ...params }) -> DevRev.SubtypesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists subtypes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.subtypesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SubtypesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesCreate</a>({ ...params }) -> DevRev.CustomStagesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesCreate({
    name: "name",
    ordinal: 1,
    state: "state",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesGet</a>({ ...params }) -> DevRev.CustomStagesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesGet({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesGetPost</a>({ ...params }) -> DevRev.CustomStagesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesList</a>({ ...params }) -> DevRev.CustomStagesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom stages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesListPost</a>({ ...params }) -> DevRev.CustomStagesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom stages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesUpdate</a>({ ...params }) -> DevRev.CustomStagesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesCreate</a>({ ...params }) -> DevRev.CustomStatesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesCreate({
    name: "name",
    ordinal: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesGet</a>({ ...params }) -> DevRev.CustomStatesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesGet({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesGetPost</a>({ ...params }) -> DevRev.CustomStatesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesList</a>({ ...params }) -> DevRev.CustomStatesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom states.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesListPost</a>({ ...params }) -> DevRev.CustomStatesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom states.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesUpdate</a>({ ...params }) -> DevRev.CustomStatesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">core</a>({ ...params }) -> DevRev.SearchCoreResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for records based on a given query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.core({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchCoreQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">corePost</a>({ ...params }) -> DevRev.SearchCoreResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for records based on a given query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.corePost({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchCoreRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">hybrid</a>({ ...params }) -> DevRev.SearchHybridResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs search, using a combination of syntactic and semantic search.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.hybrid({
    namespace: DevRev.SearchHybridNamespace.Article,
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchHybridQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">hybridPost</a>({ ...params }) -> DevRev.SearchHybridResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs search, using a combination of syntactic and semantic search.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.hybridPost({
    namespace: DevRev.SearchHybridNamespace.Article,
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchHybridRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## service-accounts

<details><summary><code>client.serviceAccounts.<a href="/src/api/resources/serviceAccounts/client/Client.ts">get</a>({ ...params }) -> DevRev.ServiceAccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a service account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceAccounts.get({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ServiceAccountsGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceAccounts.<a href="/src/api/resources/serviceAccounts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ServiceAccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a service account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceAccounts.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ServiceAccountsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## snap-ins

<details><summary><code>client.snapIns.<a href="/src/api/resources/snapIns/client/Client.ts">resources</a>({ ...params }) -> DevRev.SnapInsResourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets snap-in resources for a user in a snap-in.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapIns.resources({
    id: "id",
    user: "user",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapInsResourcesQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapIns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapIns.<a href="/src/api/resources/snapIns/client/Client.ts">resourcesPost</a>({ ...params }) -> DevRev.SnapInsResourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets snap-in resources for a user in a snap-in.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapIns.resourcesPost({
    id: "id",
    user: "user",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapInsResourcesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapIns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## snap-widgets

<details><summary><code>client.snapWidgets.<a href="/src/api/resources/snapWidgets/client/Client.ts">create</a>({ ...params }) -> DevRev.SnapWidgetsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a snap widget object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapWidgets.create({
    type: "email_preview",
    name: "string",
    namespace: DevRev.SnapWidgetNamespace.CommentSuggestionReplies,
    status: DevRev.SnapWidgetStatus.Draft,
    bcc: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    cc: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    from: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    htmlBody: "string",
    inReplyTo: "string",
    inlines: [
        {
            artifact: "string",
            contentId: "string",
        },
    ],
    isSpam: true,
    messageId: "string",
    rawEmailArtifact: "string",
    references: ["string"],
    replyTo: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    sentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    subject: "string",
    textBody: "string",
    to: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapWidgetsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapWidgets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## surveys

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">create</a>({ ...params }) -> DevRev.SurveysCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a schema for survey, which includes name and description of
schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">delete</a>({ ...params }) -> DevRev.SurveysDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified survey.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">list</a>({ ...params }) -> DevRev.SurveysListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List surveys requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SurveysListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List surveys requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">responsesList</a>({ ...params }) -> DevRev.SurveysResponsesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List survey responses requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.responsesList();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysResponsesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">responsesListPost</a>({ ...params }) -> DevRev.SurveysResponsesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List survey responses requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.responsesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysResponsesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">send</a>({ ...params }) -> DevRev.SurveysSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a survey on the specified channels.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.send({
    email: {
        body: "body",
        recipients: ["recipients"],
        sender: "sender",
        subject: "subject",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysSendRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">submit</a>({ ...params }) -> DevRev.SurveysSubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a user response to a survey, which is defined by the survey ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.submit({
    object: "ACC-12345",
    survey: "survey",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysSubmitRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## sys-users

<details><summary><code>client.sysUsers.<a href="/src/api/resources/sysUsers/client/Client.ts">list</a>({ ...params }) -> DevRev.SysUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists system users within your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sysUsers.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SysUsersListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SysUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sysUsers.<a href="/src/api/resources/sysUsers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SysUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists system users within your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sysUsers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SysUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SysUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sysUsers.<a href="/src/api/resources/sysUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.SysUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the system user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sysUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SysUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SysUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## timeline-entries

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">create</a>({ ...params }) -> DevRev.TimelineEntriesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new entry on an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.create({
    type: "timeline_comment",
    collections: [DevRev.TimelineEntriesCollection.Discussions],
    expiresAt: new Date("2024-01-15T09:30:00.000Z"),
    labels: ["string"],
    object: "string",
    privateTo: ["string"],
    visibility: DevRev.TimelineEntryVisibility.External,
    artifacts: ["string"],
    body: "string",
    bodyType: DevRev.TimelineCommentBodyType.SnapKit,
    externalRef: "string",
    linkPreviews: ["string"],
    snapKitBody: {},
    snapWidgetBody: ["string"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">list</a>({ ...params }) -> DevRev.TimelineEntriesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the timeline entries for an object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.list({
    object: "PROD-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">listPost</a>({ ...params }) -> DevRev.TimelineEntriesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the timeline entries for an object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.listPost({
    object: "PROD-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">update</a>({ ...params }) -> DevRev.TimelineEntriesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an entry on an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.update({
    type: "timeline_comment",
    id: "string",
    artifacts: {},
    body: "string",
    bodyType: DevRev.TimelineCommentBodyType.SnapKit,
    linkPreviews: {},
    snapKitBody: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## works

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">create</a>({ ...params }) -> DevRev.WorksCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates new work ([issue](https://devrev.ai/docs/product/build),
[ticket](https://devrev.ai/docs/product/support)) item.
[task](https://docs.devrev.ai/product/tasks) and opportunity work types
are supported in the beta version.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.create({
    type: "issue",
    appliesToPart: "string",
    artifacts: ["string"],
    body: "string",
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    customSchemaSpec: {
        apps: ["string"],
        subtype: "string",
        tenantFragment: true,
        validateRequiredFields: true,
    },
    ownedBy: ["string"],
    reportedBy: ["string"],
    stage: {
        id: "string",
        name: "string",
    },
    stageValidationOptions: ["allow_non_start"],
    tags: [
        {
            id: "string",
            value: "string",
        },
    ],
    targetCloseDate: new Date("2024-01-15T09:30:00.000Z"),
    title: "string",
    developedWith: ["string"],
    priority: DevRev.IssuePriority.P0,
    priorityV2: 1,
    sprint: "string",
    targetStartDate: new Date("2024-01-15T09:30:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">delete</a>({ ...params }) -> DevRev.WorksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a work item.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.delete({
    id: "ISS-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">export</a>({ ...params }) -> DevRev.WorksExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.export();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksExportQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.WorksExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">get</a>({ ...params }) -> DevRev.WorksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a work item's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.get({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksGetQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">getPost</a>({ ...params }) -> DevRev.WorksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a work item's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">list</a>({ ...params }) -> DevRev.WorksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksListQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">listPost</a>({ ...params }) -> DevRev.WorksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">update</a>({ ...params }) -> DevRev.WorksUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a work item's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.update({
    type: "issue",
    appliesToPart: "string",
    artifacts: {},
    body: "string",
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    customSchemaSpec: {
        apps: ["string"],
        subtype: "string",
        tenantFragment: true,
        validateRequiredFields: true,
    },
    id: "string",
    ownedBy: {},
    reportedBy: {},
    stage: {
        name: "string",
        stage: "string",
    },
    stageValidationOptions: ["allow_invalid_transition"],
    stagedInfo: {},
    tags: {},
    targetCloseDate: new Date("2024-01-15T09:30:00.000Z"),
    title: "string",
    developedWith: {},
    priority: DevRev.IssuePriority.P0,
    priorityV2: 1,
    sprint: "string",
    targetStartDate: new Date("2024-01-15T09:30:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
