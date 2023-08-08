<script>
  import { page } from '$app/stores';
</script>

<h1>루트 에러 페이지{$page.status}: {$page.error?.message}</h1>